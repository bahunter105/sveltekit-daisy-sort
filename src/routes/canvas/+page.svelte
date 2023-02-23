<script>
  import Konva from 'konva'
  import {onMount} from "svelte"
  import {onDestroy} from "svelte"
  import plusCircleSVG from '$lib/images/plus-circle.svg'
  import createPersonSVG from '$lib/images/Create Person.svg'
  import createTeamSVG from '$lib/images/Create Team.svg'
  import teamSVG from '$lib/images/Team Created.svg'
  import personSVG from '$lib/images/Person Blob.svg'
  import infoButtonSVG from '$lib/images/i-blob.svg'
  import orangeAddSVG from '$lib/images/Orange Add.svg'
  import createtemplateSVG from '$lib/images/Component 10.svg'
  import addNewTeamGroup from '$lib/functions/newTeamGroup.js'

  let stage
  let layer
  // set an Array of Shapes
  let shapesArray = []

  onMount(()=> {
    stage = new Konva.Stage({
      container: 'canvas',
      width: innerWidth,
      height: innerHeight,
    });

    layer = new Konva.Layer();
    stage.add(layer)

    // add transform layer
    let tr = new Konva.Transformer();
    // layer.add(tr);

    // call XY coordinates of plusCircle for later use
    let plusCircleX = stage.width() * 0.0825
    let plusCircleY = stage.height() * 0.09335219236

    // add the plusCircle
    let plusCirlceImageObj = new Image();
    plusCirlceImageObj.onload = function () {
      let plusCircle = new Konva.Image({
        image:plusCirlceImageObj,
        x: plusCircleX,
        y: plusCircleY,
        // x: stage.width() / 2,
        // y: stage.height() / 2,
        offsetX:50,
        offsetY: 50,
        width: 100,
        height: 100,
        // draggable: true,
        id: 'plusCircle'
      });

      // add the shape to the layer
      layer.add(plusCircle);

      plusCircle.on('pointerdown', function () {
        let createPerson = stage.findOne("#createPerson")
        let createTeam = stage.findOne("#createTeam")
        if (createPerson.visible() === true) {
          createPerson.hide()
          createTeam.hide()
        } else {
          createPerson.show()
          createTeam.show()
        }
      })

      // add cursor styling
      plusCircle.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
      });
      plusCircle.on('mouseout', function () {
        document.body.style.cursor = 'default';
      });
    };
    plusCirlceImageObj.src = plusCircleSVG

    // add createPerson
    Konva.Image.fromURL(createPersonSVG, (imageNode) => {
      layer.add(imageNode);
      imageNode.setAttrs({
        // x = radius * Math.cos(Math.PI * angle / 180);
        x: plusCircleX + 100 * Math.cos(Math.PI * 60 / 180),
        // y = radius * Math.sin(Math.PI * angle / 180);
        y: plusCircleY + 100 * Math.sin(Math.PI * 60 / 180),
        // x: 0,
        // y: 0,
        width: 66,
        height: 66,
        offsetX: 33,
        offsetY: 33,
        // draggable: true,
        visible: false,
        id:"createPerson",
      });

      // add cursor styling
      imageNode.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
      });
      imageNode.on('mouseout', function () {
        document.body.style.cursor = 'default';
      });

      shapesArray.push(imageNode)
    });

    // add createTeam
    Konva.Image.fromURL(createTeamSVG, (imageNode) => {
      layer.add(imageNode);
      imageNode.setAttrs({
        // x = radius * Math.cos(Math.PI * angle / 180);
        x: plusCircleX + 100 * Math.cos(Math.PI * 0 / 180),
        // y = radius * Math.sin(Math.PI * angle / 180);
        y: plusCircleY + 100 * Math.sin(Math.PI * 0 / 180),
        // x: 0,
        // y: 0,
        width: 66,
        height: 66,
        offsetX: 33,
        offsetY: 33,
        // draggable: true,
        visible: false,
        id:"createTeam",
      });

      // add cursor styling
      imageNode.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
      });
      imageNode.on('mouseout', function () {
        document.body.style.cursor = 'default';
      });

      // add addNewTeamGroup function
      imageNode.on('pointerdown', function () {
        addNewTeamGroup(stage, layer)
        let createPerson = stage.findOne("#createPerson")
        let createTeam = stage.findOne("#createTeam")
        if (createPerson.visible() === true) {
          createPerson.hide()
          createTeam.hide()
        } else {
          createPerson.show()
          createTeam.show()
        }
      })

      shapesArray.push(imageNode)
    });


    // let createtemplate = Konva.Image.fromURL(createtemplateSVG, (imageNode) => {
    //   layer.add(imageNode);
    //   imageNode.setAttrs({
    //     x: 350,
    //     y: 0,
    //     width: 300,
    //     height: 250,
    //     draggable: true,
    //   });

    //   // add cursor styling
    //   imageNode.on('mouseover', function () {
    //     document.body.style.cursor = 'pointer';
    //   });
    //   imageNode.on('mouseout', function () {
    //     document.body.style.cursor = 'default';
    //   });

    //   imageNode.on('mouseover', function () {
    //       console.log(`${imageNode.x()} x ${imageNode.y()}`);
    //     });
    // });
    // createtemplate

    // create group for Full Team Bubbles
    let fullteamGroup = new Konva.Group({
      draggable: true,
    })

    let fullteamX  = stage.width() / 1.6
    let fullteamY = stage.height() / 1.4

    // add fullteam
    let fullteam = Konva.Image.fromURL(teamSVG, (imageNode) => {
      // layer.add(imageNode);
      fullteamGroup.add(imageNode);

      imageNode.setAttrs({
        x: fullteamX,
        y: fullteamY,
        width: 180,
        height: 180,
        offsetX: 90,
        offsetY: 90,
        // draggable: true,
      });

      // add cursor styling
      imageNode.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
      });
      imageNode.on('mouseout', function () {
        document.body.style.cursor = 'default';
      });

      imageNode.on('mouseover', function () {
        console.log(`${imageNode.x()} x ${imageNode.y()}`);
      });

      // fullteamX = imageNode.x()
      // fullteamY = imageNode.y()
      // add to tranform layer
      // tr.node(imageNode)
      // shapesArray.push(imageNode)
    });
    fullteam

    var orbitCircle = new Konva.Circle({
      x: fullteamX,
      y: fullteamY,
      radius: 110,
      offsetX: 3,
      offsetY: 3,
      fill: 'rgba(0,0,255,0)',
      stroke: 'rgb(255, 168, 0, 0.5)',
      strokeWidth: 1,
      dash: [1,1]
    });

    fullteamGroup.add(orbitCircle);


    // add Person Blob
    let personDegree = -45
    function personBlob(personDegree) {
      Konva.Image.fromURL(personSVG, (imageNode) => {
        // layer.add(imageNode);
        let personGroup = new Konva.Group({
          draggable: true,
        })
        personGroup.add(imageNode);
        imageNode.setAttrs({
          // x = radius * Math.cos(Math.PI * angle / 180);
          x: fullteamX + 110 * Math.cos(Math.PI * personDegree / 180),
          // y = radius * Math.sin(Math.PI * angle / 180);
          y: fullteamY + 110 * Math.sin(Math.PI * personDegree / 180),
          // x: 0,
          // y: 0,
          width: 60,
          height: 60,
          offsetX: 30,
          offsetY: 30,
          // draggable: true,
        });

        var textName = new Konva.Text({
          text: 'Person Name',
          x: imageNode.x() + 20,
          y: imageNode.y() - 15,
          fontSize: 10,
          fontStyle: 'bold italic',
        });
        personGroup.add(textName)

        var textTitle = new Konva.Text({
          text: 'Title',
          x: imageNode.x() + 20,
          y: imageNode.y() - 3,
          fontSize: 10,
          fontStyle: 'italic',
        });
        personGroup.add(textTitle)
        fullteamGroup.add(personGroup)
        // add cursor styling
        imageNode.on('mouseover', function () {
          document.body.style.cursor = 'pointer';
        });
        imageNode.on('mouseout', function () {
          document.body.style.cursor = 'default';
        });

        imageNode.on('mouseover', function () {
          console.log(`${imageNode.x()} x ${imageNode.y()}`);
        });

        // add to tranform layer
        // tr.node(imageNode)
        shapesArray.push(imageNode)
      });
    }
    // let personBlob = Konva.Image.fromURL(personSVG, (imageNode) => {
    //   // layer.add(imageNode);
    //   let personGroup = new Konva.Group({
    //     draggable: true,
    //   })
    //   personGroup.add(imageNode);
    //   imageNode.setAttrs({
    //     // x = radius * Math.cos(Math.PI * angle / 180);
    //     x: fullteamX + 110 * Math.cos(Math.PI * personDegree / 180),
    //     // y = radius * Math.sin(Math.PI * angle / 180);
    //     y: fullteamY + 110 * Math.sin(Math.PI * personDegree / 180),
    //     // x: 0,
    //     // y: 0,
    //     width: 60,
    //     height: 60,
    //     offsetX: 30,
    //     offsetY: 30,
    //     // draggable: true,
    //   });

    //   var textName = new Konva.Text({
    //     text: 'Person Name',
    //     x: imageNode.x() + 20,
    //     y: imageNode.y() - 15,
    //     fontSize: 10,
    //     fontStyle: 'bold italic',
    //   });
    //   personGroup.add(textName)

    //   var textTitle = new Konva.Text({
    //     text: 'Title',
    //     x: imageNode.x() + 20,
    //     y: imageNode.y() - 3,
    //     fontSize: 10,
    //     fontStyle: 'italic',
    //   });
    //   personGroup.add(textTitle)
    //   fullteamGroup.add(personGroup)
    //   // add cursor styling
    //   imageNode.on('mouseover', function () {
    //     document.body.style.cursor = 'pointer';
    //   });
    //   imageNode.on('mouseout', function () {
    //     document.body.style.cursor = 'default';
    //   });

    //   imageNode.on('mouseover', function () {
    //     console.log(`${imageNode.x()} x ${imageNode.y()}`);
    //   });

    //   // add to tranform layer
    //   // tr.node(imageNode)
    //   shapesArray.push(imageNode)
    // });

    var times = 5;
    for(var i = 0; i < times; i++){
        personBlob(personDegree);
        personDegree += 25
    }

    // add infoButton
    let fullteaminfoButton = Konva.Image.fromURL(infoButtonSVG, (imageNode) => {
      // layer.add(imageNode);
      fullteamGroup.add(imageNode);
      imageNode.setAttrs({
        // x = radius * Math.cos(Math.PI * angle / 180);
        x: fullteamX + 77 * Math.cos(Math.PI * (-35 + 180) / 180),
        // y = radius * Math.sin(Math.PI * angle / 180);
        y: fullteamY + 77 * Math.sin(Math.PI * (-35 + 180) / 180),
        // x: 0,
        // y: 0,
        width: 56,
        height: 56,
        offsetX: 28,
        offsetY: 28,
        // draggable: true,
      });

      // add cursor styling
      imageNode.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
      });
      imageNode.on('mouseout', function () {
        document.body.style.cursor = 'default';
      });

      imageNode.on('mouseover', function () {
        console.log(`${imageNode.x()} x ${imageNode.y()}`);
      });

      // add to tranform layer
      // tr.node(imageNode)
      shapesArray.push(imageNode)
    });
    fullteaminfoButton

    layer.add(fullteamGroup)


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

    // Drag and Select feature
    var selectionRectangle = new Konva.Rect({
      fill: 'rgba(0,0,255,0.5)',
      visible: false,
    });
    layer.add(selectionRectangle);

    var x1, y1, x2, y2;
    stage.on('mousedown touchstart', (e) => {
      // do nothing if we mousedown on any shape
      if (e.target !== stage) {
        return;
      }
      e.evt.preventDefault();
      x1 = stage.getPointerPosition().x;
      y1 = stage.getPointerPosition().y;
      x2 = stage.getPointerPosition().x;
      y2 = stage.getPointerPosition().y;

      selectionRectangle.visible(true);
      selectionRectangle.width(0);
      selectionRectangle.height(0);
    });

    stage.on('mousemove touchmove', (e) => {
      // do nothing if we didn't start selection
      if (!selectionRectangle.visible()) {
        return;
      }
      e.evt.preventDefault();
      x2 = stage.getPointerPosition().x;
      y2 = stage.getPointerPosition().y;

      selectionRectangle.setAttrs({
        x: Math.min(x1, x2),
        y: Math.min(y1, y2),
        width: Math.abs(x2 - x1),
        height: Math.abs(y2 - y1),
      });
    });

    stage.on('mouseup touchend', (e) => {
      // do nothing if we didn't start selection
      if (!selectionRectangle.visible()) {
        return;
      }
      e.evt.preventDefault();
      // update visibility in timeout, so we can check it in click event
      setTimeout(() => {
        selectionRectangle.visible(false);
      });

      // var shapes = stage.find('.rect');
      var shapes = shapesArray;
      var box = selectionRectangle.getClientRect();
      var selected = shapes.filter((shape) =>
        Konva.Util.haveIntersection(box, shape.getClientRect())
      );
      tr.nodes(selected);
    });

    // clicks should select/deselect shapes
    stage.on('click tap', function (e) {
      // if we are selecting with rect, do nothing
      if (selectionRectangle.visible()) {
        return;
      }

      // if click on empty area - remove all selections
      if (e.target === stage) {
        tr.nodes([]);
        return;
      }

      // do nothing if clicked NOT on our rectangles
      // if (!e.target.hasName('rect')) {
      //   return;
      // }

      // do we pressed shift or ctrl?
      const metaPressed = e.evt.shiftKey || e.evt.ctrlKey || e.evt.metaKey;
      const isSelected = tr.nodes().indexOf(e.target) >= 0;

      if (!metaPressed && !isSelected) {
        // if no key pressed and the node is not selected
        // select just one
        tr.nodes([e.target]);
      } else if (metaPressed && isSelected) {
        // if we pressed keys and node was selected
        // we need to remove it from selection:
        const nodes = tr.nodes().slice(); // use slice to have new copy of array
        // remove node from array
        nodes.splice(nodes.indexOf(e.target), 1);
        tr.nodes(nodes);
      } else if (metaPressed && !isSelected) {
        // add the node into selection
        const nodes = tr.nodes().concat([e.target]);
        tr.nodes(nodes);
      }
    });
    // debugger
  })
  // console.log(stage)
  // console.log(layer)
  // console.log(shapesArray)



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
  onDestroy(() => {
		if (stage) {
			stage.destroy();
		}
	});
</script>

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
      <li><a href="/sorting">Sorting Algorithm</a></li>
    </ul>
  </div>
</div>
<p>hi</p>
