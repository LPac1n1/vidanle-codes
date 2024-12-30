document.addEventListener('DOMContentLoaded', () => {
	const CaroS = document.querySelector('.carousel-slider');
	const CaroSlider = new MicroSlider(CaroS);
	const CaroSTimer = 4000;
	setInterval(() => CaroSlider.next(), CaroSTimer);
});




























// const sliderItem1 = document.getElementById('slider-item1')
// const sliderItem2 = document.getElementById('slider-item2')
// const sliderItem3 = document.getElementById('slider-item3')

// const firstOrder = () => {
//   sliderItem1.classList.remove('order-1')
//   sliderItem1.classList.add('order-3')
  
//   sliderItem2.classList.remove('order-2')
//   sliderItem2.classList.add('order-1')

//   sliderItem3.classList.remove('order-3')
//   sliderItem3.classList.add('order-2')
// }

// const secondOrder = () => {
//   sliderItem1.classList.remove('order-3')
//   sliderItem1.classList.add('order-2')
  
//   sliderItem2.classList.remove('order-1')
//   sliderItem2.classList.add('order-3')

//   sliderItem3.classList.remove('order-2')
//   sliderItem3.classList.add('order-1')
// }

// const thirdOrder = () => {
//   sliderItem1.classList.remove('order-2')
//   sliderItem1.classList.add('order-1')
  
//   sliderItem2.classList.remove('order-3')
//   sliderItem2.classList.add('order-2')

//   sliderItem3.classList.remove('order-1')
//   sliderItem3.classList.add('order-3')
// }

// function swipeItems(order) {
//   if(order == 1) {
//     firstOrder()
//   } else if(order == 2) {
//     secondOrder()
//   } else if(order == 3) {
//     thirdOrder()
//   }
// }

// let orderNumber = 1
// setInterval(() => {
//   swipeItems(orderNumber)
//   orderNumber++

//   if(orderNumber > 3) {
//     orderNumber = 1
//   }
// }, 5 * 1000)