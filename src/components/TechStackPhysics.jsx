import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import { technologies } from "../constants/index.js";

const TechStackPhysics = ({ isPlaying = false, hasGravity = false }) => {
    const sceneRef = useRef(null);
    const engineRef = useRef(Matter.Engine.create({ enableSleeping: false }));
    const mouseConstraintRef = useRef(null);
    const logoBodiesRef = useRef([]);

    const logos = technologies.map(tech => "/assets/logos/" + tech.icon).filter(Boolean);

    useEffect(() => {
        const engine = engineRef.current;
        const world = engine.world;

        const width = sceneRef.current.clientWidth;
        const height = sceneRef.current.clientHeight;

        // Zero gravity
        engine.world.gravity.x = 0;
        engine.world.gravity.y = 0;

        const render = Matter.Render.create({
            element: sceneRef.current,
            engine,
            options: { width, height, wireframes: false, background: "#00000000" },
        });
        Matter.Render.run(render);

        const runner = Matter.Runner.create();
        Matter.Runner.run(runner, engine);

        // Walls (keep them)
        const thickness = 50;
        const walls = [
            Matter.Bodies.rectangle(width / 2, height + thickness / 2, width, thickness, { isStatic: true }),
            Matter.Bodies.rectangle(width / 2, -thickness / 2, width, thickness, { isStatic: true }),
            Matter.Bodies.rectangle(-thickness / 2, height / 2, thickness, height, { isStatic: true }),
            Matter.Bodies.rectangle(width + thickness / 2, height / 2, thickness, height, { isStatic: true }),
        ];
        Matter.World.add(world, walls);

        // Mouse control
        const mouse = Matter.Mouse.create(render.canvas);
        mouseConstraintRef.current = Matter.MouseConstraint.create(engine, {
            mouse,
            constraint: { stiffness: 0.3, render: { visible: false } },
        });
        Matter.World.add(world, mouseConstraintRef.current);
        render.mouse = mouse;



        // Load images and create bodies
        (async () => {
            const images = [];
            for (const url of logos) {
                const img = new Image();
                img.src = url;
                await new Promise(resolve => { img.onload = resolve; img.onerror = resolve; });
                images.push({ url, width: img.width, height: img.height });
            }

            const radius = 20;
            const padding = 10; // space between bodies
            const diameter = radius * 2 + padding;

            // Calculate how many bodies fit per row to fully cover width
            const cols = Math.floor(width / diameter);
            const extraSpace = width - cols * diameter; // leftover space
            const offsetX = extraSpace / 2 + radius; // center the row

            logoBodiesRef.current = images.map((img, i) => {
                const scale = (2 * radius) / Math.max(img.width, img.height);

                const col = i % cols;
                const row = Math.floor(i / cols);
                const x = offsetX + col * diameter;
                const y = radius + padding / 2 + row * diameter;

                const body = Matter.Bodies.circle(x, y, radius, {
                    isStatic: !isPlaying,
                    restitution: 0.9,    // bouncy
                    frictionAir: 0.001,  // minimal drag
                    friction: 0,          // no surface friction
                    density: 10,       // light weight
                    sleepThreshold: Infinity, // never sleep
                    render: { sprite: { texture: img.url, xScale: scale, yScale: scale } },
                });

                // Apply tiny random initial velocity
                Matter.Body.setVelocity(body, {
                    x: (Math.random() - 0.5) * 1.5,
                    y: (Math.random() - 0.5) * 1.5,
                });

                return body;
            });

            Matter.World.add(world, logoBodiesRef.current);

            // Gentle continuous nudges for infinite floating effect


        })();

        return () => {
            Matter.Render.stop(render);
            Matter.World.clear(world, false);
            Matter.Engine.clear(engine);
            render.canvas.remove();
            render.textures = {};
        };
    }, [logos, isPlaying]);


    return (
        <div
            ref={sceneRef}
            className="w-full h-full bg-black/70 rounded-2xl overflow-hidden relative"
        />
    );
};

export default TechStackPhysics;
