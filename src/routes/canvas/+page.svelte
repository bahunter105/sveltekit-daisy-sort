<script>
  import Konva from 'konva'
  import {onMount} from "svelte"
  import plusCircle from '$lib/images/plus-circle.svg'
  $: outerWidth = 0
	$: innerWidth = 0
	$: outerHeight = 0
	$: innerHeight = 0

  let stageWidth = 100
  let stageHeight = 100

  onMount(()=> {
    const stage = new Konva.Stage({
    container: 'canvas',
    width: innerWidth,
    height: innerHeight,
  });
    stageWidth = stage.width()
    stageHeight =stage.height()
    let layer = new Konva.Layer();
    // let circle = new Konva.Circle({
    //     x: stage.width() / 2,
    //     y: stage.height() / 2,
    //     radius: 70,
    //     fill: 'red',
    //     stroke: 'black',
    //     strokeWidth: 4,
    //     draggable: true,
    //   });
    // layer.add(circle)
    Konva.Image.fromURL(plusCircle, (imageNode) => {
      layer.add(imageNode);
      imageNode.setAttrs({
        x: stage.width() / 2,
        y: stage.height() / 2,
        width: 100,
        height: 100,
        draggable: true,
      });

      // add cursor styling
      imageNode.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
      });
      imageNode.on('mouseout', function () {
        document.body.style.cursor = 'default';
      });
    });


    stage.add(layer)
    // Zoooooooming
    var scaleBy = 1.01;
    stage.on('wheel', (e) => {
      // stop default scrolling
      e.evt.preventDefault();

      var oldScale = stage.scaleX();
      var pointer = stage.getPointerPosition();

      var mousePointTo = {
        x: (pointer.x - stage.x()) / oldScale,
        y: (pointer.y - stage.y()) / oldScale,
      };

      // how to scale? Zoom in? Or zoom out?
      let direction = e.evt.deltaY > 0 ? 1 : -1;

      // when we zoom on trackpad, e.evt.ctrlKey is true
      // in that case lets revert direction
      if (e.evt.ctrlKey) {
        direction = -direction;
      }

      var newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy;

      stage.scale({ x: newScale, y: newScale });

      var newPos = {
        x: pointer.x - mousePointTo.x * newScale,
        y: pointer.y - mousePointTo.y * newScale,
      };
      stage.position(newPos);
    });
  })

  // function fitStageToCanvas(){
  //   // now we need to fit stage into parent
  //   let canvasWidth = innerWidth;
  //   // to do this we need to scale the stage
  //   let scaleX = canvasWidth / stageWidth

  //   // now we need to fit stage into parent
  //   let canvasHeight = innerHeight;
  //   // to do this we need to scale the stage
  //   let scaleY = canvasHeight / stageHeight
  //   // console.log(canvasWidth+" x " + canvasHeight);
  //   // uncomment to enable "uniform stretch"
  //   //scaleX = scaleY =Math.min(scaleX,scaleY);

  //   stage.width(stageWidth * scaleX);
  //   stage.height(stageHeight * scaleY);
  //   stage.scale({ x: scaleX, y: scaleY });
  //   stage.draw();
  // }

  // canvas.addEventListener('resize', fitStageToCanvas())
</script>

<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />

<div class="drawer">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Page content here -->
    <label for="my-drawer" class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </label>
    <div id="canvas"></div>

  </div>
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul class="menu p-4 w-80 bg-base-100 text-base-content">
      <!-- Sidebar content here -->
      <!-- <a href="/" class="btn btn-ghost normal-case text-xl" >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      </a> -->
      <li><a href="/">Home</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
