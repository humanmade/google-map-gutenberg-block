const icons = {
	pantheon: ( <svg xmlns='http://www.w3.org/2000/svg' width='20px' height='20px' viewBox='0 0 330.26 320'>
		<defs>
			<rect className='a' width='330.26' height='320' />
			<polygon className='b' points='118.24 19.41 144.08 80 111.19 80 122.07 106.67 188.72 106.67 118.24 19.41'
			/>
			<polygon className='b' points='205.87 240 194.87 213.33 179.62 213.33 157.83 162.05 144.16 162.05 165.93 213.33 127.18 213.33 198.83 300.6 172.99 240 205.87 240'
			/>
			<path d='M214.75,133.1c0.81,0,2.69-1,2.69-10.27s-1.88-10.26-2.69-10.26H168.84l8.71,20.53h37.2Z' transform='translate(0 .25)' />
			<path d='M188,157.71h30.84c0.82,0,2.69-1,2.69-10.27s-1.88-10.26-2.69-10.26H179.29Z' transform='translate(0 .25)' />
			<path d='M214.75,186.42H173.27L182,206.94h32.77c0.81,0,2.69-1,2.69-10.26S215.55,186.42,214.75,186.42Z' transform='translate(0 .25)' />
			<path d='M218.84,161.8h-56l8.71,20.53h47.31c0.82,0,2.69-1,2.69-10.26S219.66,161.8,218.84,161.8Z' transform='translate(0 .25)' />
			<path d='M214.75,186.42H173.27L182,206.94h32.77c0.81,0,2.69-1,2.69-10.26S215.55,186.42,214.75,186.42Z' transform='translate(0 .25)' />
			<path d='M218.84,161.8h-56l8.71,20.53h47.31c0.82,0,2.69-1,2.69-10.26S219.66,161.8,218.84,161.8Z' transform='translate(0 .25)' />
			<path d='M156.09,157.71l-10.45-24.62h5l10.45,24.62h22.19L164.1,112.57H116.26c-3.69,0-5.71,0-7.37,5.34-2,6.38-2.22,18.41-2.22,41.84s0.23,35.46,2.22,41.84c1.66,5.34,3.68,5.34,7.37,5.34h42l-20.8-49.24h18.66Z' transform='translate(0 .25)' />
			<path d='M223.87,200.92a8.19,8.19,0,0,1,.68-3.32,8.68,8.68,0,0,1,4.54-4.54,8.46,8.46,0,0,1,6.63,0,8.68,8.68,0,0,1,4.54,4.54,8.46,8.46,0,0,1,0,6.63,8.68,8.68,0,0,1-4.54,4.54,8.46,8.46,0,0,1-6.63,0,8.68,8.68,0,0,1-4.54-4.54A8.19,8.19,0,0,1,223.87,200.92Zm1.51,0a6.86,6.86,0,0,0,.55,2.73,7,7,0,0,0,3.74,3.74,7,7,0,0,0,5.46,0,7,7,0,0,0,3.74-3.74,7,7,0,0,0,0-5.46,7,7,0,0,0-3.74-3.74,7,7,0,0,0-5.46,0,7,7,0,0,0-3.74,3.74A6.86,6.86,0,0,0,225.39,200.92Zm3.74-4.93h3.76a3.8,3.8,0,0,1,2.6.76,2.79,2.79,0,0,1,.84,2.18,2.58,2.58,0,0,1-.66,1.93,2.75,2.75,0,0,1-1.66.76l2.52,4.13h-1.88l-2.43-4h-1.31v4h-1.79V196Zm1.79,4.25h1.31q0.41,0,.83,0a2.48,2.48,0,0,0,.75-0.17,1.26,1.26,0,0,0,.54-0.41,1.49,1.49,0,0,0,0-1.51,1.26,1.26,0,0,0-.54-0.41,2.27,2.27,0,0,0-.75-0.16l-0.83,0h-1.31v2.73Z' transform='translate(0 .25)' />
		</defs>
	</svg> ),
	googleMap: ( <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='20' height='20'>
		<g id='surface1'>
			<path d='M 42 39 L 42 9 C 42 7.34375 40.65625 6 39 6 L 9 6 C 7.34375 6 6 7.34375 6 9 L 6 39 C 6 40.65625 7.34375 42 9 42 L 39 42 C 40.65625 42 42 40.65625 42 39 Z' fill='#1c9957' />
			<path d='M 9 42 L 39 42 C 40.65625 42 24 26 24 26 C 24 26 7.34375 42 9 42 Z' fill='#3e7bf1' />
			<path d='M 42 39 L 42 9 C 42 7.34375 26 24 26 24 C 26 24 42 40.65625 42 39 Z' fill='#cbccc9' />
			<path d='M 39 42 C 40.65625 42 42 40.65625 42 39 L 42 38.753906 L 26.246094 23 L 23 26.246094 L 38.753906 42 Z' fill='#efefef' />
			<path d='M 42 9 C 42 7.34375 40.65625 6 39 6 L 38.753906 6 L 6 38.753906 L 6 39 C 6 40.65625 7.34375 42 9 42 L 9.246094 42 L 42 9.246094 Z' fill='#ffd73d' />
			<path d='M 36 2 C 30.476563 2 26 6.476563 26 12 C 26 18.8125 33.664063 21.296875 35.332031 31.851563 C 35.441406 32.53125 35.449219 33 36 33 C 36.550781 33 36.558594 32.53125 36.667969 31.851563 C 38.335938 21.296875 46 18.8125 46 12 C 46 6.476563 41.523438 2 36 2 Z' fill='#d73f35' />
			<path d='M 39.5 12 C 39.5 13.933594 37.933594 15.5 36 15.5 C 34.066406 15.5 32.5 13.933594 32.5 12 C 32.5 10.066406 34.066406 8.5 36 8.5 C 37.933594 8.5 39.5 10.066406 39.5 12 Z' fill='#752622' />
			<path d='M 14.492188 12.53125 L 14.492188 14.632813 L 17.488281 14.632813 C 17.09375 15.90625 16.03125 16.816406 14.492188 16.816406 C 12.660156 16.816406 11.175781 15.332031 11.175781 13.5 C 11.175781 11.664063 12.660156 10.179688 14.492188 10.179688 C 15.316406 10.179688 16.070313 10.484375 16.648438 10.980469 L 18.195313 9.433594 C 17.21875 8.542969 15.921875 8 14.492188 8 C 11.453125 8 8.992188 10.464844 8.992188 13.5 C 8.992188 16.535156 11.453125 19 14.492188 19 C 19.304688 19 20.128906 14.683594 19.675781 12.539063 Z' fill='#fff' />
		</g>
	</svg> ),
}

export default icons
