  import Konva from 'konva'
  import teamSVG from '$lib/images/Team Created.svg'
  import infoButtonSVG from '$lib/images/i-blob.svg'
  import orangeAddSVG from '$lib/images/Orange Add.svg'

function addNewTeamGroup(stage, layer) {
      // add newTeamGroup
    let newTeamGroup = new Konva.Group({
      draggable: true,
    })
    layer.add(newTeamGroup)
    let newTeamX = stage.width() / 1.3
    let newTeamY = stage.height() / 5

    // add newTeamGroup
    let newTeamImageObj = new Image();
    newTeamImageObj.onload = function () {
      let newTeam = new Konva.Image({
        image:newTeamImageObj,
        x: newTeamX,
        y: newTeamY,
        width: 180,
        height: 180,
        offsetX: 90,
        offsetY: 90,
      });

      // add the shape to the layer
      newTeamGroup.add(newTeam)
      newTeam.zIndex(0)

      // add other functions
      // newTeam.on('pointerdown', function () {
      //   let createPerson = stage.findOne("#createPerson")
      //   let createTeam = stage.findOne("#createTeam")
      //   if (createPerson.visible() === true) {
      //     createPerson.hide()
      //     createTeam.hide()
      //   } else {
      //     createPerson.show()
      //     createTeam.show()
      //   }
      // })

      // add cursor styling
      newTeam.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
      });
      newTeam.on('mouseout', function () {
        document.body.style.cursor = 'default';
      });
    };
    newTeamImageObj.src = teamSVG

    // add infoButton
    let newTeamInfoButtonImageObj = new Image();
    newTeamInfoButtonImageObj.onload = function () {
      let newTeamInfoButton = new Konva.Image({
        image:newTeamInfoButtonImageObj,
        // x = radius * Math.cos(Math.PI * angle / 180);
        x: newTeamX + 77 * Math.cos(Math.PI * -35 / 180),
        // y = radius * Math.sin(Math.PI * angle / 180);
        y: newTeamY + 77 * Math.sin(Math.PI * -35 / 180),
        // x: 0,
        // y: 0,
        width: 56,
        height: 56,
        offsetX: 28,
        offsetY: 28,
        // draggable: true,
      });

      // add the shape to the layer
      newTeamGroup.add(newTeamInfoButton)
      newTeamInfoButton.zIndex(1)
      // add other functions
      // newTeamInfoButton.on('pointerdown', function () {
      //   let createPerson = stage.findOne("#createPerson")
      //   let createTeam = stage.findOne("#createTeam")
      //   if (createPerson.visible() === true) {
      //     createPerson.hide()
      //     createTeam.hide()
      //   } else {
      //     createPerson.show()
      //     createTeam.show()
      //   }
      // })

      // add cursor styling
      newTeamInfoButton.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
      });
      newTeamInfoButton.on('mouseout', function () {
        document.body.style.cursor = 'default';
      });
    };
    newTeamInfoButtonImageObj.src = infoButtonSVG

    // orangeAdd
    let newTeamOrangeAddImageObj = new Image();
    newTeamOrangeAddImageObj.onload = function () {
      let newTeamOrangeAdd = new Konva.Image({
        image:newTeamOrangeAddImageObj,
        // x = radius * Math.cos(Math.PI * angle / 180);
        x: newTeamX + 66 * Math.cos(Math.PI * 35 / 180),
        // y = radius * Math.sin(Math.PI * angle / 180);
        y: newTeamY + 66 * Math.sin(Math.PI * 35 / 180),
        // x: 0,
        // y: 0,
        width: 40,
        height: 40,
        offsetX: 20,
        offsetY: 20,
        // draggable: true,
      });

      // add the shape to the layer
      newTeamGroup.add(newTeamOrangeAdd)
      newTeamOrangeAdd.zIndex(2)
      // add other functions
      // newTeamOrangeAdd.on('pointerdown', function () {
      //   let createPerson = stage.findOne("#createPerson")
      //   let createTeam = stage.findOne("#createTeam")
      //   if (createPerson.visible() === true) {
      //     createPerson.hide()
      //     createTeam.hide()
      //   } else {
      //     createPerson.show()
      //     createTeam.show()
      //   }
      // })

      // add cursor styling
      newTeamOrangeAdd.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
      });
      newTeamOrangeAdd.on('mouseout', function () {
        document.body.style.cursor = 'default';
      });
    };
    newTeamOrangeAddImageObj.src = orangeAddSVG
}

export default addNewTeamGroup;
