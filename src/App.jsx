import { useState } from 'react';

function App() {
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');
	const [displaynumber, setDisplaynumber] = useState('0000 0000 0000 0000');
	const [mounth, setMounth] = useState('');
	const [year, setYear] = useState('');
	const [exdate, setExdate] = useState('');

	const handleInputMounthChange = (e) => {
		setMounth(e.target.value);
	};

	const handleInputYearChange = (e) => {
		setYear(e.target.value);
	};

	const handleInputCvcChange = (e) => {
		setExdate(e.target.value);
	};

	const handleInputNameChange = (e) => {
		setName(e.target.value);
	};

	const handleCardNumberChange = (e) => {
		const inputValue = e.target.value;
		const sanitizedValue = inputValue.replace(/\D/g, ''); // Eliminar caracteres que no sean números
		const formattedValue = sanitizedValue.match(/.{1,4}/g); // Dividir en grupos de 4 caracteres

		if (sanitizedValue.length <= 16) {
			setNumber(sanitizedValue);
			if (sanitizedValue === '') {
				setDisplaynumber('0000 0000 0000 0000');
			} else {
				setDisplaynumber(formattedValue ? formattedValue.join(' ') : '');
			}
		}
	};

	return (
		<div className="xl:flex flex flex-col">
			<div className="xl:w-screen">
				<div className="h-[100vh] font-Chakra">
					<div className="h-[100vh] bg-[url('src/images/bg-main-mobile_11zon.webp')] xl:bg-[url('src/images/bg-main-desktop_11zon.webp')] bg-no-repeat bg-contain ">
						<div className="flex flex-col xl:justify-center h-screen ">
							<div className="fixed xl:relative rounded-xl w-72 xl:w-[440px] h-40 xl:h-60 mt-32 xl:mt-0 ml-5 xl:ml-[10%] bg-[url('src/images/bg-card-front_11zon.webp')] bg-contain bg-center bg-no-repeat  ">
								<div className="flex items-center gap-2 mt-3 ml-4 xl:mt-5 xl:ml-8">
									<div className="xl:w-10 xl:h-10 w-8 h-8 rounded-full bg-white "></div>
									<div className="xl:w-5 xl:h-5 w-4 h-4 rounded-full bg-transparent border "></div>
								</div>
								<div className=" xl:h-40 h-24 flex flex-col justify-end items-start gap-2 xl:gap-6 px-3 xl:px-10">
									<h1 className="tracking-widest font-medium text-lg xl:text-[28px] text-white">
										{displaynumber}
									</h1>
									<div className="flex justify-between  w-64 xl:w-96  xl:pr-5 font-normal text-white text-sm xl:text-lg">
										<p>{name ? name : 'Name lastName'}</p>
										<p>
											{mounth ? mounth : '00'}/{year ? year : '00'}
										</p>
									</div>
								</div>
							</div>
							<div className="rounded-xl w-72  xl:w-[440px] h-40 xl:h-60 ml-20 mt-10  xl:ml-[15%] bg-[url('src/images/bg-card-back_11zon.webp')] bg-contain bg-center bg-no-repeat ">
								<h1 className="flex justify-end  items-center h-40 pr-10 xl:h-60 xl:pr-14 tracking-widest	 text-white font-normal xl:font-semibold text-sm xl:text-lg">
									{exdate ? exdate : '000'}
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute flex items-center justify-center xl:pl-[390px]  w-screen h-[100vh]   ">
				<form className="flex flex-col  h-10 xl:w-80 xl:h-96 font-Chakra uppercase tracking-widest ">
					<label
						htmlFor="name"
						className="text-sm mb-2 text-[#22092f] font-semibold "
					>
						Cardholder Name
					</label>
					<input
						className="border border-[#65228a] focus:outline-none focus:ring focus:ring-violet-300  shadow-lg  rounded-md px-2 h-10 mb-6 "
						type="text"
						onChange={handleInputNameChange}
						id="name"
						value={name}
						maxLength={25}
					/>
					<label
						htmlFor="Number"
						className="text-sm mb-2 text-[#22092f] font-semibold"
					>
						Card Number
					</label>
					<input
						className="border border-[#65228a] focus:outline-none focus:ring focus:ring-violet-300 shadow-lg rounded-md px-2 h-10 mb-6"
						type="text"
						onChange={handleCardNumberChange}
						value={number}
						maxLength={19}
					/>

					<div className="flex flex-col gap-2 ">
						<div className="flex justify-between">
							<label
								htmlFor=""
								className="text-sm text-[#22092f] font-semibold"
							>
								Exp. Date (MM/YY)
							</label>
							<label
								className="text-sm text-left w-36 text-[#22092f] font-semibold"
								htmlFor=""
							>
								CVC
							</label>
						</div>
						<div className="flex gap-2 ">
							<div className="flex gap-2 ">
								<input
									className="border border-[#65228a] focus:outline-none focus:ring focus:ring-violet-300  shadow-lg w-20 rounded-md px-2 h-10"
									type="text"
									onChange={handleInputMounthChange}
									value={mounth}
									maxLength={2}
								/>
								<input
									className="border border-[#65228a] focus:outline-none focus:ring focus:ring-violet-300 shadow-lg  w-20 rounded-md px-2 h-10"
									type="text"
									onChange={handleInputYearChange}
									value={year}
									maxLength={2}
								/>
							</div>
							<div>
								<input
									className="border border-[#65228a] focus:outline-none focus:ring focus:ring-violet-300 shadow-lg  w-36 rounded-md px-2 h-10"
									type="text"
									onChange={handleInputCvcChange}
									value={exdate}
									maxLength={3}
								/>
							</div>
						</div>
						<button className="bg-[#22092f] hover:bg-[#451b5c] mt-4 h-12 rounded-md text-white font-bold">
							Confirm
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export { App };
