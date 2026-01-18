import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { technologies, wakatimeDataURL } from "../constants/index.js";

const TechStackPhysics = ({ isPlaying = false, hasGravity = false }) => {
    const MAX_RADIUS = 70;
    const MIN_RADIUS = 25;
    const WALL_THICKNESS = 100;
    const MAX_SPEED = 15;

    const sceneRef = useRef(null);
    const engineRef = useRef(Matter.Engine.create({ enableSleeping: false }));
    const mouseConstraintRef = useRef(null);
    const logoBodiesRef = useRef([]);
    const [logoImages, setLogoImages] = useState([]);
    const [isGrabbing, setIsGrabbing] = useState(false);

    useEffect(() => {
        const fetchWakaLanguagesAndLoadImages = async () => {
            try {
                const response = await fetch(wakatimeDataURL.languages);
                const data = await response.json();
                const wakaLanguages = data.languages;

                const dataForPhysics = technologies.map((tech) => {
                    const url = "/assets/logos/" + tech.icon;
                    const percentage = retrievePercentageValue(wakaLanguages, tech.wakaName);
                    return { url, percentage };
                });

                const images = await Promise.all(dataForPhysics.map(data =>
                    new Promise(resolve => {
                        const img = new Image();
                        img.src = data.url;
                        img.onload = () => resolve({
                            url: data.url,
                            width: img.width,
                            height: img.height,
                            percentage: data.percentage,
                        });
                        img.onerror = () => resolve(null);
                    })
                ));

                const validImages = images.filter(Boolean);
                validImages.sort((a, b) => b.percentage - a.percentage);
                setLogoImages(validImages);

            } catch (error) {
                console.error(error);
            }
        };

        fetchWakaLanguagesAndLoadImages().then();
    }, []);

    function scaleRadius(percent, minRadius = MIN_RADIUS, maxRadius = MAX_RADIUS) {
        return minRadius + (percent / 100) * (maxRadius - minRadius);
    }

    function retrievePercentageValue(wakaLangStats, techName) {
        if (!wakaLangStats) return 0;
        const lang = wakaLangStats.find(
            (l) => l.name.toLowerCase() === techName.toLowerCase()
        );
        return lang ? lang.percent : 0;
    }

    useEffect(() => {
        const engine = engineRef.current;
        const world = engine.world;
        const render = Matter.Render.create({
            element: sceneRef.current,
            engine,
            options: {
                width: sceneRef.current.clientWidth,
                height: sceneRef.current.clientHeight,
                wireframes: false,
                background: "#00000000",
            },
        });
        const runner = Matter.Runner.create();

        const setup = () => {
            Matter.World.clear(world);
            Matter.Engine.clear(engine);

            const width = sceneRef.current.clientWidth;
            const height = sceneRef.current.clientHeight;

            engine.world.gravity.y = hasGravity ? 1 : 0;
            engine.world.gravity.x = 0;

            Matter.Render.run(render);
            Matter.Runner.run(runner, engine);

            const beforeUpdateListener = () => {
                if (!hasGravity) {
                    const gravitySource = { x: width / 2, y: height / 2 };
                    logoBodiesRef.current.forEach(body => {
                        const dx = gravitySource.x - body.position.x;
                        const dy = gravitySource.y - body.position.y;
                        Matter.Body.applyForce(body, body.position, {
                            x: dx * 0.00001,
                            y: dy * 0.00001
                        });
                    });
                }

                logoBodiesRef.current.forEach(body => {
                    const speed = Math.sqrt(body.velocity.x ** 2 + body.velocity.y ** 2);
                    if (speed > MAX_SPEED) {
                        const scale = MAX_SPEED / speed;
                        Matter.Body.setVelocity(body, {
                            x: body.velocity.x * scale,
                            y: body.velocity.y * scale
                        });
                    }
                });
            };

            Matter.Events.on(engine, 'beforeUpdate', beforeUpdateListener);

            const walls = [
                Matter.Bodies.rectangle(width / 2, height + WALL_THICKNESS / 2, width, WALL_THICKNESS, { isStatic: true }),
                Matter.Bodies.rectangle(width / 2, -WALL_THICKNESS / 2, width, WALL_THICKNESS, { isStatic: true }),
                Matter.Bodies.rectangle(-WALL_THICKNESS / 2, height / 2, WALL_THICKNESS, height, { isStatic: true }),
                Matter.Bodies.rectangle(width + WALL_THICKNESS / 2, height / 2, WALL_THICKNESS, height, { isStatic: true }),
            ];
            Matter.World.add(world, walls);

            const mouse = Matter.Mouse.create(render.canvas);
            mouseConstraintRef.current = Matter.MouseConstraint.create(engine, {
                mouse,
                constraint: {
                    stiffness: 0.1,
                    render: { visible: false }
                },
            });
            Matter.World.add(world, mouseConstraintRef.current);
            render.mouse = mouse;

            logoBodiesRef.current = logoImages.map((img, i) => {
                const radius = scaleRadius(img.percentage);
                const scale = (2 * radius) / Math.max(img.width, img.height);
                const angle = i * 2.39996;
                const spreadFactor = 2.2 * MAX_RADIUS;
                const distance = (spreadFactor * Math.sqrt(i)) / 2;

                let x = width / 2 + distance * Math.cos(angle);
                let y = height / 2 + distance * Math.sin(angle);

                x = Math.max(radius + WALL_THICKNESS, Math.min(x, width - radius - WALL_THICKNESS));
                y = Math.max(radius + WALL_THICKNESS, Math.min(y, height - radius - WALL_THICKNESS));

                const body = Matter.Bodies.circle(x, y, radius, {
                    isStatic: !isPlaying,
                    restitution: 0.5,
                    frictionAir: 0.02,
                    friction: 0.1,
                    density: 0.5,
                    render: {
                        sprite: { texture: img.url, xScale: scale, yScale: scale },
                    },
                });

                if (isPlaying) {
                    Matter.Body.setVelocity(body, {
                        x: (width / 2 - x) * 0.01,
                        y: (height / 2 - y) * 0.01,
                    });
                }
                return body;
            });

            Matter.World.add(world, logoBodiesRef.current);
        };

        if (logoImages.length > 0) {
            setup();
        }

        return () => {
            Matter.Render.stop(render);
            Matter.Runner.stop(runner);
            Matter.World.clear(world);
            Matter.Engine.clear(engine);
            if (render.canvas) {
                render.canvas.remove();
            }
            render.textures = {};
            if (engine) {
                Matter.Events.off(engine, 'beforeUpdate');
            }
        };
    }, [isPlaying, hasGravity, logoImages]);

    return (
        <div
            ref={sceneRef}
            className={`w-full h-full bg-black/70 rounded-2xl overflow-hidden relative ${isGrabbing ? "cursor-grabbing" : "cursor-grab"}`}
            onMouseDown={() => setIsGrabbing(true)}
            onMouseUp={() => setIsGrabbing(false)}
            onMouseLeave={() => setIsGrabbing(false)}
        />
    );
};

export default TechStackPhysics;