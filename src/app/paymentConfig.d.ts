declare var goSell : any;

goSell.config({
	containerID:"goSell-container",
	gateway:{
		publicKey:"pk_test_Vlk842B1EA7tDN5QbrfGjYzh",
		language:"en",
		contactInfo:true,
		supportedCurrencies:"all",
		supportedPaymentMethods: "all",
		saveCardOption:false,
		customerCards: true,
		notifications:'standard',
		callback:(response) => {
			console.log('response', response);
		},
		onClose: () => {
			console.log("onClose Event");
		},
		backgroundImg: {
			url: 'imgURL',
			opacity: '0.5'
		},
		labels:{
			cardNumber:"Card Number",
			expirationDate:"MM/YY",
			cvv:"CVV",
			cardHolder:"Name on Card",
			actionButton:"Pay"
		},
		style: {
			base: {
				color: '#535353',
				lineHeight: '18px',
				fontFamily: 'sans-serif',
				fontSmoothing: 'antialiased',
				fontSize: '16px',
				'::placeholder': {
					color: 'rgba(0, 0, 0, 0.26)',
					fontSize:'15px'
				}
			},
			invalid: {
				color: 'red',
				iconColor: '#fa755a '
			}
		}
	},
	customer:{
		id:"cus_m1QB0320181401l1LD1812485",
		first_name: "First Name",
		middle_name: "Middle Name",
		last_name: "Last Name",
		email: "demo@email.com",
		phone: {
			country_code: "965",
			number: "99999999"
		}
	},
	order:{
		amount: 100,
		currency:"KWD",
		items:[{
			id:1,
			name:'item1',
			description: 'item1 desc',
			quantity:'x1',
			amount_per_unit:'KD00.000',
			discount: {
				type: 'P',
				value: '10%'
			},
			total_amount: 'KD000.000'
		},
		{
			id:2,
			name:'item2',
			description: 'item2 desc',
			quantity:'x2',
			amount_per_unit:'KD00.000',
			discount: {
				type: 'P',
				value: '10%'
			},
			total_amount: 'KD000.000'
		},
		{
			id:3,
			name:'item3',
			description: 'item3 desc',
			quantity:'x1',
			amount_per_unit:'KD00.000',
			discount: {
				type: 'P',
				value: '10%'
			},
			total_amount: 'KD000.000'
		}],
		shipping:null,
		taxes: null
	},
	transaction:{
		mode: 'charge',
		charge:{
			saveCard: false,
			threeDSecure: true,
			description: "Test Description",
			statement_descriptor: "Sample",
			reference:{
				transaction: "txn_0001",
				order: "ord_0001"
			},
			metadata:{},
			receipt:{
				email: false,
				sms: true
			},
			redirect: "./redirect.html",
			post: null,
		}
	}
});