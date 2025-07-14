<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Engine, World, Bodies, Body, Vertices } from "matter-js";
import { Sprite } from "@/lib/animation/Sprite";
import { Actor } from "@/lib/animation/Actor";
import { Actions } from "@/lib/animation/Actions";
import robotCatUrl from '@/assets/sprites/robot_cat_walking.png';
import { CreateWorld, CreateColliders, AnimationLoop, RefreshWorld } from './utils';


const canvasRef = ref<HTMLCanvasElement | null>(null);
let delta = 0
onMounted(() => {
  let resizeTimeout: ReturnType<typeof setTimeout>;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      RefreshWorld(  {
        ctx, canvas,
        engine, world, ground,
        actor, delta
      });
    }, 200)
  })

  const {canvas, ctx, canvasSize, engine, world} = CreateWorld(canvasRef);
  const {ground, actor} = CreateColliders({world, canvas})
  AnimationLoop({canvas, canvasSize, ctx, engine, world, ground, actor});
});

//
//   // Create canvasRef and context reference
//   const canvas = canvasRef.value!;
//   const ctx = canvas.getContext("2d")!;
//
//   // Grab various sizes
//   const renderWidth = canvas.clientWidth;
//   const renderHeight = canvas.clientHeight;
//   canvas.width = renderWidth;
//   canvas.height = renderHeight;
//   const canvasSize = { renderWidth, renderHeight };
//
//   // Setup Matter engine
//   const engine = Engine.create();
//   const world = engine.world;
//
//
//
//   // Create asset colliders //
//   // Ground
//   const groundHeight = 256;
//   const groundWidth = canvas.width;
//   const groundY = canvas.height + groundHeight * 1.25;
//   const ground = Bodies.rectangle(
//     groundWidth/2,      // center X
//     groundY,               // center Y (flush with bottom)
//     groundWidth,
//     groundHeight,
//     {
//       isStatic: true,
//       restitution: 0,
//       friction: 0.5,
//     }
//   );
//   World.add(world, ground);
//
//   // Sprite
//   const sprite = new Sprite({
//     url: robotCatUrl,
//     frameWidth: 256,
//     frameHeight: 256,
//     frameCount: 4,
//     frameTime: 150
//   });
//   const body = Bodies.rectangle(canvas.width/2, canvas.height, 256, 256, {
//     restitution: 0.3,
//     frictionAir: 0.1
//   });
//   World.add(world, body);
//
//
//   // Actor
//   const actions = new Actions(); // can be empty for now
//   const actor = new Actor(sprite, body, actions);
//   //
//   // Collider end //
//
//
//   // Observer
//   // [TODO] This section is NOT dry...
//   //  Need to pull out the logic from here and the top of this file.
//   //  Probably a good idea to go through and encapsulate related things
//   //  into a library.
//   // const resizeObserver = new ResizeObserver(() => {
//   //   const canvas = canvasRef.value!;
//   //   const renderWidth = canvas.clientWidth;
//   //   const renderHeight = canvas.clientHeight;
//   //
//   //   const canvasSize = { renderWidth, renderHeight };
//   //
//   //   const groundHeight = 256;
//   //   const groundY = renderHeight + groundHeight * 1.25;
//   //
//   //   // Update ground position
//   //   Body.setPosition(ground, {
//   //     x: renderWidth / 2,
//   //     y: groundY,
//   //   });
//   //
//   //   // Update ground size
//   //   const newWidth = canvas.width;
//   //   const newVertices = Vertices.fromPath(`0 0 ${ newWidth } 0 ${ newWidth } ${ groundHeight } 0 ${ groundHeight }`, ground);
//   //   Body.setVertices(ground, newVertices);
//   // });
//
// // Start observing
// //   resizeObserver.observe(canvas);
//
//
//
//   // Animation Loop //
//   // 4. Animate
//   let lastTime = performance.now();
//
//   function loop(time: number) {
//
//     let delta = time - lastTime;
//     lastTime = time;
//     delta = Math.min(delta, 100)
//
//     Engine.update(engine, delta);
//     actor.update(delta);
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     actor.draw(ctx, canvasSize);
//
//     requestAnimationFrame(loop);
//   }
//
//   requestAnimationFrame(loop);
// });
</script>

<template>
  <!--  <canvas ref="canvasRef"/>-->
  <canvas class="mini-engine" ref="canvasRef"/>
</template>

<style scoped>
.mini-engine {
  height: inherit;
  width: inherit;
  position: inherit;
  display: inherit;
}
</style>
