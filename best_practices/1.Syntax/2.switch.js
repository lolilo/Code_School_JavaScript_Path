function CaretakerMedallion (caretaker){

	switch (caretaker) {
		case "ElementElder" : 
			this.goldenEdge = "Consilium autem liberabit vos";
		case "ColorCardinal" :
			this.silverStamp = "Non video colorem, colore videt me";
		case "PixelPriest" : 
			this.bronzeBanner = "Omne initium est a pixel";
		case "FontFriar" : 
			this.circumscribedSquare = "Venit Comic Sans";
		case "StyleSensei" : 
			this.innerRing = "Ars autem est in aeternum";
	}
}

// Here's a sample usage of our CaretakerMedallion function with two sample inputs.
var medallion1 = new CaretakerMedallion("ColorCardinal") 
/*
  medallion1 will have the following properties
  CaretakerMedallion {
    silverStamp: "Non video colorem, colore videt me", 
    bronzeBanner: "Omne initium est a pixel", 
    circumscribedSquare: "Venit Comic Sans", 
    innerRing: "Ars autem est in aeternum"
  }
*/

console.log(medallion1);

// What about our StyleSensei? This is what the CaretakerMedallion inner values will be equal to.
var medallion2 = new CaretakerMedallion("StyleSensei")     
/* 
  medallion2 will have the following properties:
  CaretakerMedallion { innerRing: "Ars autem est in aeternum" }
*/
