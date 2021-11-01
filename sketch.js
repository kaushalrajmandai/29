const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;

var holder,ball,ground;
var stand1,stand2;
var ball;
var slingshot;
var polygon_img;

function preload(){
// polygon_img=loadImage("polygon.png");
// background Img=load Image("bg.png");
}

function setup() {
engine = Engine.create();
world = engine.world;


createCanvas (900,400);
ground = new Ground();
stand1 = new Stand(380,300,270,10);
stand2 = new Stand(700,200,200,10);

//level one

block1 = new Block (280,275,30,40);
block2 = new Block (310,275,30,40);