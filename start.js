/** @format */

document.addEventListener('DOMContentLoaded', function (event) {
	if (window.screen.width > 830) {
		const constrain1item1 = 400;
		const constrain2item1 = 1400;
		const mouseOverContainer = document.getElementById('mainframe');
		const ex1Layeritem1 = document.getElementById('i1layer0');
		const ex2Layeritem1 = document.getElementById('i1layer1');

		const constrain1item2 = 400;
		const constrain2item2 = 1400;
		const ex1Layeritem2 = document.getElementById('i2layer0');
		const ex2Layeritem2 = document.getElementById('i2layer1');

		const constrain1item3 = 400;
		const constrain2item3 = 1400;
		const ex1Layeritem3 = document.getElementById('i3layer0');
		const ex2Layeritem3 = document.getElementById('i3layer1');

		function transforms(xitem, yitem, elitem) {
			let boxitem = elitem.getBoundingClientRect();
			let calcVGXitem = -(yitem - boxitem.y - boxitem.height / 2) / constrain1item1;
			let calcVGYitem = (xitem - boxitem.x - boxitem.width / 2) / (3 * constrain2item1);

			return (
				'perspective(500px) ' +
				'   rotateX(' +
				calcVGXitem +
				'deg) ' +
				'   rotateY(' +
				calcVGYitem +
				'deg) '
			);
		}

		function transformElement(elitem, xyElitem) {
			elitem.style.transform = transforms.apply(null, xyElitem);
		}

		function transforms2(x2item, y2item, el2item) {
			let box2item = el2item.getBoundingClientRect();
			let calcBGXitem = -(y2item - box2item.y - box2item.height / 2) / constrain2item1;
			let calcBGYitem = (x2item - box2item.x - box2item.width / 2) / constrain2item1;

			return (
				'perspective(100px) ' +
				'   rotateX(' +
				calcBGXitem +
				'deg) ' +
				'   rotateY(' +
				calcBGYitem +
				'deg) '
			);
		}

		function transformElement2(el2item, xyE2item) {
			el2item.style.transform = transforms2.apply(null, xyE2item);
		}

		//---------------------ITEM1-----------------------------------------------------------

		//-----------------------------------------------------------------------------------------------

		//---------------------ITEM2-----------------------------------------------------------

		function transforms(xitem2, yitem2, elitem2) {
			let boxitem2 = elitem2.getBoundingClientRect();
			let calcXitem2 = -(yitem2 - boxitem2.y - boxitem2.height / 2) / constrain1item2;
			let calcYitem2 = (xitem2 - boxitem2.x - boxitem2.width / 2) / (3 * constrain2item2);

			return (
				'perspective(500px) ' +
				'   rotateX(' +
				calcXitem2 +
				'deg) ' +
				'   rotateY(' +
				calcYitem2 +
				'deg) '
			);
		}

		function transformElement(elitem2, xyElitem2) {
			elitem2.style.transform = transforms.apply(null, xyElitem2);
		}

		function transforms2(x2item2, y2item2, el2item2) {
			let box2item2 = el2item2.getBoundingClientRect();
			let calcX2item2 = -(y2item2 - box2item2.y - box2item2.height / 2) / constrain2item2;
			let calcY2item2 = (x2item2 - box2item2.x - box2item2.width / 2) / constrain2item2;

			return (
				'perspective(100px) ' +
				'   rotateX(' +
				calcX2item2 +
				'deg) ' +
				'   rotateY(' +
				calcY2item2 +
				'deg) '
			);
		}

		function transformElement2(el2item2, xyE2item2) {
			el2item2.style.transform = transforms2.apply(null, xyE2item2);
		}

		//-----------------------------------------------------------------------------------------------

		//---------------------ITEM3-----------------------------------------------------------

		function transforms(xitem3, yitem3, elitem3) {
			let boxitem3 = elitem3.getBoundingClientRect();
			let calcXitem3 = -(yitem3 - boxitem3.y - boxitem3.height / 2) / constrain1item3;
			let calcYitem3 = (xitem3 - boxitem3.x - boxitem3.width / 2) / (3 * constrain2item3);

			return (
				'perspective(500px) ' +
				'   rotateX(' +
				calcXitem3 +
				'deg) ' +
				'   rotateY(' +
				calcYitem3 +
				'deg) '
			);
		}

		function transformElement(elitem3, xyElitem3) {
			elitem3.style.transform = transforms.apply(null, xyElitem3);
		}

		function transforms2(x2item3, y2item3, el2item3) {
			let box2item3 = el2item3.getBoundingClientRect();
			let calcX2item3 = -(y2item3 - box2item3.y - box2item3.height / 2) / constrain2item3;
			let calcY2item3 = (x2item3 - box2item3.x - box2item3.width / 2) / constrain2item3;

			return (
				'perspective(100px) ' +
				'   rotateX(' +
				calcX2item3 +
				'deg) ' +
				'   rotateY(' +
				calcY2item3 +
				'deg) '
			);
		}

		function transformElement2(el2item3, xyE2item3) {
			el2item3.style.transform = transforms2.apply(null, xyE2item3);
		}

		//-----------------------------------------------------------------------------------------------

		mouseOverContainer.onmousemove = function (e) {
			let xyitem1 = [e.clientX, e.clientY];
			let positionitem1 = xyitem1.concat([ex1Layeritem1]);
			let xy2item1 = [e.clientX, e.clientY];
			let position2item1 = xy2item1.concat([ex2Layeritem1]);
			let xyitem2 = [e.clientX, e.clientY];
			let positionitem2 = xyitem2.concat([ex1Layeritem2]);
			let xy2item2 = [e.clientX, e.clientY];
			let position2item2 = xy2item2.concat([ex2Layeritem2]);
			let xyitem3 = [e.clientX, e.clientY];
			let positionitem3 = xyitem3.concat([ex1Layeritem3]);
			let xy2item3 = [e.clientX, e.clientY];
			let position2item3 = xy2item3.concat([ex2Layeritem3]);

			window.requestAnimationFrame(function () {
				transformElement(ex1Layeritem1, positionitem1);
				transformElement2(ex2Layeritem1, position2item1);
				transformElement(ex1Layeritem2, positionitem2);
				transformElement2(ex2Layeritem2, position2item2);
				transformElement(ex1Layeritem3, positionitem3);
				transformElement2(ex2Layeritem3, position2item3);
			});
		};
	} else if (window.screen.width <= 830) {
		console.log('DOM start');
		let counter = 0;
		const updateRate = 10;
		const limit = 45;

		const tiltable1 = document.getElementById('i1layer0');
		const tiltable11 = document.getElementById('i1layer1');

		const tiltable2 = document.getElementById('i2layer0');
		const tiltable22 = document.getElementById('i2layer1');

		const tiltable3 = document.getElementById('i3layer0');
		const tiltable33 = document.getElementById('i3layer1');

		let constraint = -20;

		console.log(counter);

		function updateNow() {
			return counter++ % updateRate === 0;
		}

		window.addEventListener('deviceorientation', function (event) {
			if (updateNow()) {
				let position = Math.round(event.gamma);
				let position2 = Math.round(event.beta);

				if (Math.abs(position) > limit) {
					if (position > limit) {
						position = limit;
					} else {
						position = -limit;
					}
				}

				if (Math.abs(position2) > limit) {
					if (position2 > limit) {
						position2 = limit;
					} else {
						position2 = -limit;
					}
				}

				position = position / constraint;
				position2 = position2 / constraint;

				let perspective = window.screen.width / 2;

				console.log(perspective);

				let style =
					'perspective(' +
					perspective +
					'px)  rotateX(' +
					position2 +
					'deg) rotateY(' +
					position +
					'deg)';
				let style2 =
					'perspective(' +
					perspective +
					'px) rotateX(' +
					position2 +
					'deg) rotateY(' +
					position +
					'deg)';

				console.log(style);

				tiltable1.style.transform = style;
				tiltable11.style.transform = style2;

				tiltable2.style.transform = style;
				tiltable22.style.transform = style2;

				tiltable3.style.transform = style;
				tiltable33.style.transform = style2;
			}
		});
	}
});
