export class Hero{
constructor(    public id:number,
    public name:string,
    public power:string,
    public alterEgo?:string){

}
}
let myHero=new Hero(41,'black panther','fly','lazy');
console.log(myHero);