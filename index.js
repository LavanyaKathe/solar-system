const scene = new THREE.Scene();
const loader = new THREE.TextureLoader();
loader.load('stars.jpeg', function(texture) {
    scene.background = texture;
});
const fontLoader = new THREE.FontLoader();
let objtxt1, objtxt2, objtxt3, objtxt4, objtxt5, objtxt6, objtxt7, objtxt8, objtxt9;
let mercuryobj, venusobj, earthobj, marsobj, jupobj, satobj, uranobj, nepobj, pluobj;

// sun
const sphereGeometry = new THREE.SphereGeometry(11, 100, 100);
const sphereMaterial = new THREE.MeshStandardMaterial({ 
    color: "yellow",
    map: loader.load('sun1.jpg'),
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(0, 0, 0);
scene.add(sphere);

fontLoader.load('Parkinsans Medium_Regular.json', function (font) {
    const textGeometry = new THREE.TextGeometry('SUN', {
        font: font,
        size: 3,
        height: 0.1,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.05,
        bevelOffset: 0,
        bevelSegments: 5
    });

    const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textMesh.position.set(3, 10, 8);
    scene.add(textMesh);
});

// Function for making orbits
function createOrbit(radius) {
    const points = [];
    const segments = 100;
    for (let i = 0; i <= segments; i++) {
        const angle = (i / segments) * Math.PI * 2; 
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        points.push(new THREE.Vector3(x, 0, z));
    }
    const orbitGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.5, transparent: true });
    const orbitLine = new THREE.LineLoop(orbitGeometry, orbitMaterial);
    return orbitLine;
}

// mercury
const material = new THREE.MeshStandardMaterial({
    color: "white",
    map: loader.load('mercury.jpg'),
});
const geometry = new THREE.SphereGeometry(5, 40, 40);
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(20, 0, 0);
scene.add(mesh);
sphere.add(mesh);

mercuryobj = new THREE.Object3D();
mercuryobj.add(mesh);
scene.add(mercuryobj);

fontLoader.load('Parkinsans Medium_Regular.json', function (font) {
    const textGeometry1 = new THREE.TextGeometry('MERCURY', {
        font: font,
        size: 1.5,
        height: 0.1,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.05,
        bevelOffset: 0,
        bevelSegments: 5
    });

    const textMaterial1 = new THREE.MeshBasicMaterial({ color: 0xffffff });
    textMesh1 = new THREE.Mesh(textGeometry1, textMaterial1); 
    const mercuryOrbit = createOrbit(20); 
    scene.add(mercuryOrbit);
    textMesh1.position.set(20, 7, 0);
    scene.add(textMesh1);
    objtxt1 = new THREE.Object3D(); 
    objtxt1.add(textMesh1);
    objtxt1.add(mesh);
    scene.add(objtxt1);
});

// venus
const material1 = new THREE.MeshBasicMaterial(
    { color: "white",
        map: loader.load('venus.jpg'),

    });
const geometry1 = new THREE.SphereGeometry(7,40,40);
const mesh1 = new THREE.Mesh(geometry1, material1);
const venusOrbit = createOrbit(33); 
scene.add(venusOrbit);
mesh1.position.set(33,0,0);
scene.add(mesh1);
sphere.add(mesh1);

 venusobj = new THREE.Object3D();
venusobj.add(mesh1);
scene.add(venusobj);

fontLoader.load('Parkinsans Medium_Regular.json', function (font) {
    const textGeometry2 = new THREE.TextGeometry('VENUS', {
        font: font,
        size:1.5,
        height: 0.1,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.05,
        bevelOffset: 0,
        bevelSegments: 5
    });

    const textMaterial2 = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const textMesh2 = new THREE.Mesh(textGeometry2, textMaterial2);
    textMesh2.position.set(33,8,0);
    scene.add(textMesh2);
    objtxt2 = new THREE.Object3D();
    objtxt2.add(textMesh2);
    objtxt2.add(mesh1);
    scene.add(objtxt2);
});

// earth
const material2= new THREE.MeshBasicMaterial(
    { color: "white",
        map: loader.load('earth.jpeg'),

    });
const geometry2 = new THREE.SphereGeometry(7.5,40,100);
const mesh2 = new THREE.Mesh(geometry2, material2);
const earthOrbit = createOrbit(50); 
scene.add(earthOrbit);
mesh2.position.set(50,0,0);
scene.add(mesh2);
sphere.add(mesh2);

 earthobj = new THREE.Object3D();
earthobj.add(mesh2);
scene.add(earthobj);

fontLoader.load('Parkinsans Medium_Regular.json', function (font) {
    const textGeometry3 = new THREE.TextGeometry('EARTH', {
        font: font,
        size:1.5,
        height: 0.1,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.05,
        bevelOffset: 0,
        bevelSegments: 5
    });

    const textMaterial3 = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const textMesh3 = new THREE.Mesh(textGeometry3, textMaterial3);
    textMesh3.position.set(50,9,0);
    scene.add(textMesh3);
     objtxt3 = new THREE.Object3D();
    objtxt3.add(textMesh3);
    objtxt3.add(mesh2);
    scene.add(objtxt3);
});


// mars
const material3= new THREE.MeshBasicMaterial(
    { color: "white",
        map: loader.load('mars.jpg'),

    });
const geometry3 = new THREE.SphereGeometry(7.5,30,100);
const mesh3 = new THREE.Mesh(geometry3, material3);
const marsOrbit = createOrbit(68); 
scene.add(marsOrbit)
mesh3.position.set(68,0,0);
scene.add(mesh3);
sphere.add(mesh3);

 marsobj = new THREE.Object3D();
marsobj.add(mesh3);
scene.add(marsobj);

fontLoader.load('Parkinsans Medium_Regular.json', function (font) {
    const textGeometry4 = new THREE.TextGeometry('MARS', {
        font: font,
        size:1.5,
        height: 0.1,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.05,
        bevelOffset: 0,
        bevelSegments: 5
    });

    const textMaterial4 = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const textMesh4 = new THREE.Mesh(textGeometry4, textMaterial4);
    textMesh4.position.set(68,9,0);
    scene.add(textMesh4);
     objtxt4 = new THREE.Object3D();
    objtxt4.add(textMesh4);
    objtxt4.add(mesh3);
    scene.add(objtxt4);
});

// jupiter
const material4= new THREE.MeshBasicMaterial(
    { color: "white",
        map: loader.load('jupiter.jpg'),

    });
const geometry4 = new THREE.SphereGeometry(8.5,30,100);
const mesh4 = new THREE.Mesh(geometry4, material4);
const jupiterOrbit = createOrbit(87); 
scene.add(jupiterOrbit)
mesh4.position.set(87,0,0);
scene.add(mesh4);
sphere.add(mesh4);

 jupobj = new THREE.Object3D();
jupobj.add(mesh4);
scene.add(jupobj);

fontLoader.load('Parkinsans Medium_Regular.json', function (font) {
    const textGeometry5 = new THREE.TextGeometry('JUPITER', {
        font: font,
        size:1.5,
        height: 0.1,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.05,
        bevelOffset: 0,
        bevelSegments: 5
    });

    const textMaterial5 = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const textMesh5 = new THREE.Mesh(textGeometry5, textMaterial5);
    textMesh5.position.set(80,9,0);
    scene.add(textMesh5);
     objtxt5 = new THREE.Object3D();
    objtxt5.add(textMesh5);
    objtxt5.add(mesh4);
    scene.add(objtxt5);
});

// saturn
const material5= new THREE.MeshBasicMaterial(
    { color: "white",
        map: loader.load('saturn.jpg'),

    });
const geometry5 = new THREE.SphereGeometry(7.5,30,100);
const mesh5 = new THREE.Mesh(geometry5, material5);
const saturnOrbit = createOrbit(105); 
scene.add(saturnOrbit)
mesh5.position.set(105,0,0);
scene.add(mesh5);
sphere.add(mesh5);

 satobj = new THREE.Object3D();
satobj.add(mesh5);
scene.add(satobj);

fontLoader.load('Parkinsans Medium_Regular.json', function (font) {
    const textGeometry6 = new THREE.TextGeometry('SATURN', {
        font: font,
        size:1.5,
        height: 0.1,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.05,
        bevelOffset: 0,
        bevelSegments: 5
    });

    const textMaterial6 = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const textMesh6 = new THREE.Mesh(textGeometry6, textMaterial6);
    textMesh6.position.set(93,9,0);
    scene.add(textMesh6);
     objtxt6 = new THREE.Object3D();
    objtxt6.add(textMesh6);
    objtxt6.add(mesh5);
    scene.add(objtxt6);
});

//uranus
const material6= new THREE.MeshBasicMaterial(
    { color: "white",
        map: loader.load('uranus.jpg'),

    });
const geometry6 = new THREE.SphereGeometry(6.5,30,100);
const mesh6 = new THREE.Mesh(geometry6, material6);
const uranusOrbit = createOrbit(122); 
scene.add(uranusOrbit);
mesh6.position.set(122,0,0);
scene.add(mesh6);
sphere.add(mesh6);

 uranobj = new THREE.Object3D();
uranobj.add(mesh6);
scene.add(uranobj);


fontLoader.load('Parkinsans Medium_Regular.json', function (font) {
    const textGeometry7 = new THREE.TextGeometry('URANUS', {
        font: font,
        size:1.5,
        height: 0.1,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.05,
        bevelOffset: 0,
        bevelSegments: 5
    });

    const textMaterial7 = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const textMesh7 = new THREE.Mesh(textGeometry7, textMaterial7);
    textMesh7.position.set(110,9,0);
    scene.add(textMesh7);
     objtxt7 = new THREE.Object3D();
    objtxt7.add(textMesh7);
    objtxt7.add(mesh6);
    scene.add(objtxt7);
});
//neptune
const material7= new THREE.MeshBasicMaterial(
    { color: "white",
        map: loader.load('neptune.jpg'),

    });
const geometry7 = new THREE.SphereGeometry(6.5,30,100);
const mesh7 = new THREE.Mesh(geometry7, material7);
const neptuneOrbit = createOrbit(137); 
scene.add(neptuneOrbit)
mesh7.position.set(137,0,0);
scene.add(mesh7);
sphere.add(mesh7);

 nepobj = new THREE.Object3D();
nepobj.add(mesh7);
scene.add(nepobj);


fontLoader.load('Parkinsans Medium_Regular.json', function (font) {
    const textGeometry8 = new THREE.TextGeometry('NEPTUNE', {
        font: font,
        size:1.5,
        height: 0.1,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.05,
        bevelOffset: 0,
        bevelSegments: 5
    });

    const textMaterial8 = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const textMesh8 = new THREE.Mesh(textGeometry8, textMaterial8);
    textMesh8.position.set(121,9,0);
    scene.add(textMesh8);
    objtxt8 = new THREE.Object3D();
    objtxt8.add(textMesh8);
    objtxt8.add(mesh7);
    scene.add(objtxt8);
});

//pluto
const material8= new THREE.MeshBasicMaterial(
    { color: "white",
        map: loader.load('pluto.jpg'),

    });
const geometry8 = new THREE.SphereGeometry(3,30,100);
const mesh8 = new THREE.Mesh(geometry8, material8);
const plutoOrbit = createOrbit(165); 
scene.add(plutoOrbit)
mesh8.position.set(165,0,0);
scene.add(mesh8);
sphere.add(mesh8);

 pluobj = new THREE.Object3D();
pluobj.add(mesh8);
scene.add(pluobj);

fontLoader.load('Parkinsans Medium_Regular.json', function (font) {
    const textGeometry9 = new THREE.TextGeometry('PLUTO', {
        font: font,
        size:1.5,
        height: 0.1,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.05,
        bevelOffset: 0,
        bevelSegments: 5
    });

    const textMaterial9 = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const textMesh9 = new THREE.Mesh(textGeometry9, textMaterial9);
    textMesh9.position.set(150,7,0);
    scene.add(textMesh9); 
    objtxt9 = new THREE.Object3D();
    objtxt9.add(textMesh9);
    objtxt9.add(mesh8);
    scene.add(objtxt9);
});


// Ambient light
const ambientlight = new THREE.AmbientLight(0x333333);
scene.add(ambientlight);

 // Directional light
const directionalLight = new THREE.DirectionalLight(0xFFFFFF,0.8);
scene.add(directionalLight);

// Renderer 
const target = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas: target,antialias:true,alpha:true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Camera and controls
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 40, 210);
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.update();
camera.lookAt(scene.position);
const pointLight = new THREE.PointLight(0xFFFFFF,2,300);
scene.add(pointLight);

// Animation function
const animate = () => {
    requestAnimationFrame(animate);
    pointLight.position.set(10, 0, 0);
    sphere.rotateY(0.005);
    mercuryobj.rotateY(0.02);
    
    if (objtxt1) objtxt1.rotateY(0.02);
    if (venusobj) venusobj.rotateY(0.01);
    if (objtxt2) objtxt2.rotateY(0.01);
    if (earthobj) earthobj.rotateY(0.004);
    if (objtxt3) objtxt3.rotateY(0.004);
    if (marsobj) marsobj.rotateY(0.007);
    if (objtxt4) objtxt4.rotateY(0.007);
    if (jupobj) jupobj.rotateY(0.005);
    if (objtxt5) objtxt5.rotateY(0.005);
    if (satobj) satobj.rotateY(0.01);
    if (objtxt6) objtxt6.rotateY(0.01);
    if (uranobj) uranobj.rotateY(0.004);
    if (objtxt7) objtxt7.rotateY(0.004);
    if (nepobj) nepobj.rotateY(0.002);
    if (objtxt8) objtxt8.rotateY(0.002);
    if (pluobj) pluobj.rotateY(0.006);
    if (objtxt9) objtxt9.rotateY(0.006);
    
    // Rotate other meshes if they are defined
    if (mesh2) mesh2.rotateY(0.004);
    if (mesh3) mesh3.rotateY(0.003);
    if (mesh4) mesh4.rotateY(0.008);
    if (mesh5) mesh5.rotateY(0.006);
    if (mesh6) mesh6.rotateY(0.004);
    if (mesh7) mesh7.rotateY(0.002);
    if (mesh8) mesh8.rotateY(0.006);
    
    renderer.render(scene, camera);
};
animate();