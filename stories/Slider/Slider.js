import {html} from 'lit';
import './slider.scss';
import {Button} from '../Button/Button';


export const Slider = ({title}) => {
	return html`
		<div class="wrapper">
			<div class="top-part">
				<h2>${title}</h2>
				${Button({
					label: 'Кнопка',
					type: "secondary",
					state: false
				})}
			</div>
			<div class="swiper-button-prev">
				<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
					<path fill-rule="evenodd" clip-rule="evenodd"
								d="M9.05936 3.19064C9.23021 3.3615 9.23021 3.6385 9.05936 3.80936L5.86872 7L9.05936 10.1906C9.23021 10.3615 9.23021 10.6385 9.05936 10.8094C8.8885 10.9802 8.6115 10.9802 8.44064 10.8094L4.94064 7.30936C4.76979 7.1385 4.76979 6.8615 4.94064 6.69064L8.44064 3.19064C8.6115 3.01979 8.8885 3.01979 9.05936 3.19064Z"
								fill="black"/>
				</svg>
			</div>
			<div class="swiper">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<div class="content">
							<h4>City</h4>
							<p>from 0 000 $</p>
							${title}
						</div>

					</div>
					<div class="swiper-slide">
						<div class="content">
							<h4>City</h4>
							<p>from 0 000 $</p>
							${Button({
								label: 'Кнопка',
								type: "primary",
								state: false
							})}
						</div>

					</div>
					<div class="swiper-slide">
						<div class="content">
							<h4>City</h4>
							<p>from 0 000 $</p>
							${Button({
								label: 'Кнопка',
								type: "primary",
								state: false
							})}
						</div>

					</div>
					<div class="swiper-slide">
						<div class="content">
							<h4>City</h4>
							<p>from 0 000 $</p>
							<button class="prime">Button</button>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="content">
							<h4>City</h4>
							<p>from 0 000 $</p>
							${Button({
								label: 'Кнопка',
								type: "primary",
								state: false
							})}
						</div>

					</div>
					<div class="swiper-slide">
						<div class="content">
							<h4>City</h4>
							<p>from 0 000 $</p>
							${Button({
								label: 'Кнопка',
								type: "primary",
								state: false
							})}
						</div>

					</div>
					<div class="swiper-slide">
						<div class="content">
							<h4>City</h4>
							<p>from 0 000 $</p>
							${Button({
								label: 'Кнопка',
								type: "primary",
								state: false
							})}
						</div>

					</div>
					<div class="swiper-slide">
						<div class="content">
							<h4>City</h4>
							<p>from 0 000 $</p>
							${Button({
								label: 'Кнопка',
								type: "primary",
								state: false
							})}
						</div>
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
			<div class="swiper-button-next">
				<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
					<path fill-rule="evenodd" clip-rule="evenodd"
								d="M4.94064 3.19064C4.76979 3.3615 4.76979 3.6385 4.94064 3.80936L8.13128 7L4.94064 10.1906C4.76979 10.3615 4.76979 10.6385 4.94064 10.8094C5.1115 10.9802 5.3885 10.9802 5.55936 10.8094L9.05936 7.30936C9.23021 7.1385 9.23021 6.8615 9.05936 6.69064L5.55936 3.19064C5.3885 3.01979 5.1115 3.01979 4.94064 3.19064Z"
								fill="#535353"/>
				</svg>
			</div>
		</div>
		<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
		<script>
			const swiper = new Swiper('.swiper', {
				// Optional parameters
				spaceBetween: 24,
				// If we need pagination
				pagination: {
					el: '.swiper-pagination',
				},

				// Navigation arrows
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},

				breakpoints: {
					375: {
						slidesPerView: 1.2,
					},

					480: {
						slidesPerView: 1.3,
					},

					640: {
						slidesPerView: 1.5,
					},

					768: {
						slidesPerView: 2,
					},

					1025: {
						slidesPerView: 4,
					}
				},
			});
		</script>
	`;
};
