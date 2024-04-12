
import AOS from 'aos';
import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FontLoader} from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry} from 'three/examples/jsm/geometries/TextGeometry.js'
import { Group } from 'three'
import * as dat from 'dat.gui'

import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'

//threex domelement
import MouseMeshInteraction from '@danielblagy/three-mmi'
//preloader stuff

AOS.init( { duration:2500})


let preloaderl = document.getElementById('preloaderleft')
let preloaderr = document.getElementById('preloaderright')




//window.addEventListener('load', () => {
//    preloader.style.display = 'none'
//}
//)





//const gui = new dat.GUI()








const fontLoader = new FontLoader()
/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

//Lights
const ambientlieght = new THREE.AmbientLight( 0xFFFFFF , 0.5)
scene.add( ambientlieght)

const pointLight = new THREE.PointLight(0xf0e199, 1)
pointLight.position.x = 0
pointLight.position.y = 12
pointLight.position.z = -10
scene.add(pointLight)
//gui.add(pointLight.position, 'x',-10,10,0.05)
//gui.add(pointLight.position, 'y',-10,20,0.05)
//gui.add(pointLight.position, 'z',-10,10,0.05)

const textureLoader = new THREE.TextureLoader()

/**
 * Objects
 * 
 * 
 */
 const group = new THREE.Group();
 const group2 = new THREE.Group()

    const textcolor = "#64748b"
    const fonturl = '../static/fonts/fonts/helvetiker_bold.typeface.json'
    let text1e = 'Hi, I`m Simon Bergmaier'
    let text2te = 'a Developer with focus'
    let text2de = 'on performant applications'
    let text3te = 'Current Techstack:'
    let text4ce = 'Your Way through'
    let text4cde = 'the programming-thicket'
    let text5e = 'My Works:'
// german english version
let gerbutton = document.getElementById('gerbutton')

gerbutton.addEventListener('click', () => {
let text1d = 'Hi, mein Name ist Simon Bergmaier'
let text2td = 'ein Entwickler mit Fokus'
let text2dd = 'auf performante Anwendungen'    
let text3td = 'Kompetenzen:'
let text4cd = 'Ihr Weg durch das'
let text4cdd = 'Dickicht der Programme'
let text5d = 'Meine Werke:'

CreateText(text1d,text2td, text2dd,text3td, text4cd,text4cdd, text5d)
RemoveText('textfirst')
RemoveText('textsecondtop')
RemoveText('textsecondbot')
RemoveText('textthird')
RemoveText('textfourth')
RemoveText('textfourthd')
RemoveText('textfifth')

})

let engbutton = document.getElementById('engbutton')

engbutton.addEventListener('click', () => {
    let text1e = 'Hi, I`m Simon Bergmaier'
    let text2te = 'a Developer with focus'
    let text2de = 'on performant applications'
    let text3te = 'Current Techstack:'
    let text4ce = 'Your Way through'
    let text4cde = 'the programming-thicket'
    let text5e = 'My Works:'
CreateText(text1e,text2te, text2de,text3te, text4ce ,text4cde, text5e)
RemoveText('textfirst')
RemoveText('textsecondtop')
RemoveText('textsecondbot')
RemoveText('textthird')
RemoveText('textfourth')
RemoveText('textfourthd')
RemoveText('textfifth')
console.log(scene.getObjectByProperty( 'textfourth' ,name ))

})


CreateText(text1e,text2te, text2de,text3te, text4ce,text4cde, text5e)

function RemoveText(name){
const object = scene.getObjectByProperty( 'name', name );


object.geometry.dispose();
object.material.dispose();
group.remove( object );
group2.remove( object );
 //not pretty but works, maybe cache problem if spammed
}



function CreateText(text1, text2t, text2d, text3t , text4c ,text4cd, text5s) {



 fontLoader.load( fonturl, (font) =>{

    const textGeometry = new TextGeometry(
        text1,
        {
            font: font,
            size: 0.5,
            height: 0,
            curveSegments: 5,
            bevelEnabled: false,
            bevelThickness: 0,
            bevelSize: 0,
            bevelOffset: 0,
            bevelSegments: 5
        }
  
    )
    
        const textMaterial = new THREE.MeshStandardMaterial({color:textcolor})
        const textk = new THREE.Mesh(textGeometry,textMaterial)
        textMaterial.wireframe = false
        group.add(textk)
        textk.position.y = 6
        textk.position.x= -4
        textk.name = 'textfirst'
  
  } )





  fontLoader.load(fonturl, (font) =>{

    const textGeometry = new TextGeometry(
        text2t,
        {
            font: font,
            size: 0.5,
            height: 0,
            curveSegments: 5,
            bevelEnabled: false,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5
        }
  
    )
    
        const textMaterial = new THREE.MeshStandardMaterial({color:textcolor})
        const text2 = new THREE.Mesh(textGeometry,textMaterial)
        textMaterial.wireframe = false
        group.add(text2)
        text2.position.z = -7
        text2.rotation.x = - Math.PI /2
        text2.position.x = -8
        text2.name = 'textsecondtop'
      
  
  } )

  fontLoader.load(fonturl, (font) =>{

    const textGeometry = new TextGeometry(
        text2d,
        {
            font: font,
            size: 0.5,
            height: 0,
            curveSegments: 5,
            bevelEnabled: false,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5
        }
  
    )
    
        const textMaterial = new THREE.MeshStandardMaterial({color:textcolor})
        const text2 = new THREE.Mesh(textGeometry,textMaterial)
        textMaterial.wireframe = false
        group.add(text2)
        text2.position.z = -6
        text2.rotation.x = - Math.PI /2
        text2.position.x = -8
        text2.name = 'textsecondbot'
  
  } )










  fontLoader.load(fonturl, (font) =>{
 // React Next.js Three 
    const textGeometry = new TextGeometry(
        text3t,
        {
            font: font,
            size: 0.5,
            height: 0,
            curveSegments: 5,
            bevelEnabled: false,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5
        }
  
    )
    
        const textMaterial = new THREE.MeshStandardMaterial({color:textcolor})
        const text3 = new THREE.Mesh(textGeometry,textMaterial)
        textMaterial.wireframe = false
        group.add(text3)
        text3.position.y = -8
        text3.position.x = -7
        text3.rotation.x = Math.PI 
        text3.name = 'textthird'
      
  
  } )

  fontLoader.load(fonturl, (font) =>{
    // React Next.js Three 
       const textGeometry = new TextGeometry(
           'Typescript, React, Next.js',
           {
               font: font,
               size: 0.5,
               height: 0,
               curveSegments: 5,
               bevelEnabled: false,
               bevelThickness: 0.03,
               bevelSize: 0.02,
               bevelOffset: 0,
               bevelSegments: 5
           }
     
       )
       
           const textMaterial = new THREE.MeshStandardMaterial({color:textcolor})
           const text3 = new THREE.Mesh(textGeometry,textMaterial)
           textMaterial.wireframe = false
           group.add(text3)
           text3.position.y = -8
           text3.rotation.x = Math.PI 
           text3.name = 'textthirdt'
         
     
     } )
     fontLoader.load(fonturl, (font) =>{
        // React Next.js Three 
           const textGeometry = new TextGeometry(
               'Three.js, C++',
               {
                   font: font,
                   size: 0.5,
                   height: 0,
                   curveSegments: 5,
                   bevelEnabled: false,
                   bevelThickness: 0.03,
                   bevelSize: 0.02,
                   bevelOffset: 0,
                   bevelSegments: 5
               }
         
           )
           
               const textMaterial = new THREE.MeshStandardMaterial({color:textcolor})
               const text3 = new THREE.Mesh(textGeometry,textMaterial)
               textMaterial.wireframe = false
               group.add(text3)
               text3.position.y = -7
               text3.rotation.x = Math.PI 
               text3.name = 'textthirdm'
             
         
         } )
         



  fontLoader.load(fonturl, (font) =>{

    const textGeometry = new TextGeometry(
        text4c,
        {
            font: font,
            size: 0.5,
            height: 0,
            curveSegments: 5,
            bevelEnabled: false,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5
        }
  
    )
    
        const textMaterial = new THREE.MeshStandardMaterial({color:textcolor})
        const text4 = new THREE.Mesh(textGeometry,textMaterial)
        textMaterial.wireframe = false
        group.add(text4)
        text4.position.z =  7
        text4.rotation.x = Math.PI / 2
        text4.name = 'textfourth'
  
  } )
  fontLoader.load(fonturl, (font) =>{

    const textGeometry = new TextGeometry(
        text4cd,
        {
            font: font,
            size: 0.5,
            height: 0,
            curveSegments: 5,
            bevelEnabled: false,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5
        }
  
    )
    
        const textMaterial = new THREE.MeshStandardMaterial({color:textcolor})
        const text4 = new THREE.Mesh(textGeometry,textMaterial)
        textMaterial.wireframe = false
        group.add(text4)
        text4.position.z =  6
        text4.rotation.x = Math.PI / 2
        text4.name = 'textfourthd'
  
  } )


fontLoader.load(fonturl, (font) =>{

    const textGeometry = new TextGeometry(
        text5s,
        {
            font: font,
            size: 2,
            height: 0,
            curveSegments: 5,
            bevelEnabled: false,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5
        }
  
    )
    
        const textMaterial = new THREE.MeshStandardMaterial({color:textcolor})
        const text5 = new THREE.Mesh(textGeometry,textMaterial)
        textMaterial.wireframe = false
        group2.add(text5)
       text5.position.z = -15
        text5.position.x= -10
        text5.position.y= 4.5
        text5.name = 'textfifth'
        
  } )  
  
}
/**
 * Object
 */


//const cygeometry = new THREE.CylinderGeometry( 5, 5, 15, 16 );
//const cymaterial = new THREE.MeshToonMaterial( {color: 0xffff00} );
//const cylinder = new THREE.Mesh( cygeometry, cymaterial );
//group.add( cylinder );
//

//
//cylinder.rotation.x = Math.PI / 2
//cylinder.rotation.z = Math.PI / 2

//background

const bgsphere = new THREE.SphereGeometry(30,30,30)
const bgtexture = new THREE.MeshBasicMaterial()
const bg = textureLoader.load('./static/bg/sky4.jpg')
bgtexture.map = bg

bgtexture.side = 1

const bggood = new THREE.Mesh(bgsphere,bgtexture)


scene.add(bggood)

const gltfLoader = new GLTFLoader();

gltfLoader.load ('./static/3dobject/cy7.glb',
(gltf) => 
{
group.add(gltf.scene.children[0])
onload(
    preloaderl.classList.add('slide-out-left'),
    preloaderr.classList.add('slide-out-right')
)
},



)

scene.add( group );







//Links 

const sphere1 = new THREE.SphereGeometry(2,10,10)
const texture1 = new THREE.MeshBasicMaterial()
const link1tex = textureLoader.load('./static/textures/links/beemagie.jpg')
texture1.map = link1tex
const link1 = new THREE.Mesh(sphere1,texture1)
link1.rotation.y = -1

const sphere2 = new THREE.SphereGeometry(2,10,10)
const texture2 = new THREE.MeshStandardMaterial()
const link2tex = textureLoader.load('./static/textures/links/knowherefav.png')
texture2.map = link2tex
const link2 = new THREE.Mesh(sphere2,texture2)
link2.rotation.y = -1

const sphere3 = new THREE.SphereGeometry(2,10,10)
const texture3 = new THREE.MeshStandardMaterial()
const link3tex = textureLoader.load('./static/textures/links/minecraft_logo.png')
texture3.map = link3tex
const link3 = new THREE.Mesh(sphere3,texture3)
link3.rotation.y = -1

const sphere4 = new THREE.SphereGeometry(2,10,10)
const texture4 = new THREE.MeshStandardMaterial()
const link4tex = textureLoader.load('./static/textures/links/favicon4.png')
texture4.map = link4tex
const link4 = new THREE.Mesh(sphere4,texture4)
link4.rotation.y = -2

const sphere5 = new THREE.SphereGeometry(1,1,1)
const texture5 = new THREE.MeshStandardMaterial()

const extra = new THREE.Mesh(sphere5,texture5)


group2.add(extra)

extra.position.y = 100
scene.add(group2)
scene.add(link1,link2,link3,link4)

link1.position.z = -60
link2.position.z = -60
link3.position.z = -60
link4.position.z = -60

link1.position.x = -15
link2.position.x = -5
link3.position.x = 5
link4.position.x = 15

link1.name = 'link1'
link2.name = 'link2'
link3.name = 'link3'
link4.name = 'link4'
/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 0
camera.position.y = 9
camera.position.x = 0
camera.lookAt(0, 0, -9);
scene.add(camera)

// Controls
//const controls = new OrbitControls(camera, canvas)
//controls.enableDamping = true

//MMI Mesh mouse interactions

const mmi = new MouseMeshInteraction(scene, camera);

mmi.addHandler('link1', 'click', function(mesh) {
	window.location.href = "http://www.bee-magie-allgaeu.de";
	
})

mmi.addHandler('link2', 'click', function(mesh) {
	window.location.href = "https://knowhere-1.vercel.app/";
	
})

mmi.addHandler('link3', 'click', function(mesh) {
	window.location.href = "https://react-minecraft-seven.vercel.app/";
	
})

mmi.addHandler('link4', 'click', function(mesh) {
	window.location.href = "https://praxis-eight.vercel.app/";
	
})

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */

 let scrollY= window.scrollY

window.addEventListener('scroll', () =>{
scrollY = window.scrollY

})

//wiggle



let mouseX = 0
let mouseY = 0



document.addEventListener('mousemove', onDocMousemove)



function onDocMousemove(e) {
    mouseX = (e.clientX - window.innerWidth/2)
    mouseY = (e.clientY - window.innerHeight/2)
  
}

const clock = new THREE.Clock()







const tick = () =>

{
    const elapsedTime = clock.getElapsedTime()
    mmi.update();

    // Update controls
    //controls.update()
    group.rotation.x = (scrollY /  (3*window.innerHeight) *Math.PI*1.5 ) -0.7
    bggood.rotation.x = (((scrollY /  (3*window.innerHeight) *Math.PI*1.5 ) -4.7)/8)-1
    if ( group.rotation.x > 4){
        group.position.z = ((scrollY / (4*window.innerHeight))-0.72) * 64
        group.position.y = -((scrollY / (4*window.innerHeight))-0.72) * 32

        camera.position.y = 9//(9*((scrollY / (4*window.innerHeight))-0.72))*20
        camera.lookAt(0,0,-9-(40*((scrollY / (4*window.innerHeight))-0.75)))

        link1.position.z = -60/(16*((scrollY / (4*window.innerHeight))-0.75))
        link2.position.z = -60/(16*((scrollY / (4*window.innerHeight))-0.75))
        link3.position.z = -60/(16*((scrollY / (4*window.innerHeight))-0.75))
        link4.position.z = -60/(16*((scrollY / (4*window.innerHeight))-0.75))
        group2.position.z = -15/(16*((scrollY / (4*window.innerHeight))-0.75))


    } else {
        group2.position.z = -60
        camera.lookAt(0,0,-9)
        group.position.z = 0
        group.position.y = 0
    }
    camera.position.y = 9 + (mouseY * 0.001)
    camera.position.x = 0 + (mouseX * 0.002)

    if(window.innerWidth> 1150){ camera.position.z = 0}
    if(window.innerWidth<1150){ camera.position.z = 4}
       
   
    // Render
    renderer.render(scene, camera)
  
    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()


//
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')



overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  if(window.innerWidth< 600) {
  modal.classList.add('active')
  overlay.classList.add('active')
  } else {
    modal.classList.remove('active')
    overlay.classList.remove('active')
  }
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')}


  window.addEventListener('resize', ()=> { openModal(modal)})

  openModal(modal)