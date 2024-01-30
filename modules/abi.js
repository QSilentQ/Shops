export const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "request_Id",
				"type": "uint256"
			}
		],
		"name": "AcceptNewRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ActiveRole",
				"type": "uint256"
			}
		],
		"name": "AdminChangeRoleMyself",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "user_Password",
				"type": "string"
			}
		],
		"name": "Autorization",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_shop_WalletAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_shop_City",
				"type": "string"
			}
		],
		"name": "CreateNewShop",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "DeAuthorization",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "IdShop",
				"type": "uint256"
			}
		],
		"name": "DropShop",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "user_Name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "user_Password",
				"type": "string"
			}
		],
		"name": "Registration",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ActiveRole",
				"type": "uint256"
			}
		],
		"name": "SellerChangeRoleMyself",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ShowAllRequests",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "user_WalletAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "user_DesiredRole",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "user_StatusRequest",
						"type": "bool"
					}
				],
				"internalType": "struct Shops.UserRequest[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ShowAllShops",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "shop_number",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "shop_WalletAddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "shop_City",
						"type": "string"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "user_WalletAddress",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "stars",
								"type": "uint256"
							},
							{
								"internalType": "string",
								"name": "user_FeedBack",
								"type": "string"
							},
							{
								"components": [
									{
										"internalType": "address",
										"name": "owner",
										"type": "address"
									},
									{
										"internalType": "bool",
										"name": "rate",
										"type": "bool"
									}
								],
								"internalType": "struct Shops.LikeDislike[]",
								"name": "likeDislikes",
								"type": "tuple[]"
							},
							{
								"components": [
									{
										"internalType": "address",
										"name": "owner",
										"type": "address"
									},
									{
										"internalType": "string",
										"name": "comment",
										"type": "string"
									}
								],
								"internalType": "struct Shops.ReviewComment[]",
								"name": "comments",
								"type": "tuple[]"
							}
						],
						"internalType": "struct Shops.Journal[]",
						"name": "journals",
						"type": "tuple[]"
					},
					{
						"internalType": "bool",
						"name": "shop_Status",
						"type": "bool"
					}
				],
				"internalType": "struct Shops.Shop[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "DesiredRole",
				"type": "uint256"
			}
		],
		"name": "SubmitRequest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user_WalletAddress",
				"type": "address"
			}
		],
		"name": "UpdateToAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user_WalletAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "user_ShopAddress",
				"type": "address"
			}
		],
		"name": "UpdateToSeller",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "wallet",
				"type": "address"
			}
		],
		"name": "aShow",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "user_ShopAddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "user_Name",
						"type": "string"
					},
					{
						"internalType": "bytes32",
						"name": "user_Password",
						"type": "bytes32"
					},
					{
						"internalType": "uint256",
						"name": "user_Role",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "user_RoleActive",
						"type": "uint256"
					},
					{
						"internalType": "string[]",
						"name": "user_History",
						"type": "string[]"
					},
					{
						"internalType": "bool",
						"name": "user_Status",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "user_AutorizationStatus",
						"type": "bool"
					}
				],
				"internalType": "struct Shops.User",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "IdShop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "stars",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "user_FeedBack",
				"type": "string"
			}
		],
		"name": "createReview",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "IdShop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "IdReview",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "comment",
				"type": "string"
			}
		],
		"name": "createReviewComment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "IdShop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "IdReview",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "rate",
				"type": "bool"
			}
		],
		"name": "createReviewMark",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			}
		],
		"name": "getComm",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "user_WalletAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "stars",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "user_FeedBack",
						"type": "string"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "owner",
								"type": "address"
							},
							{
								"internalType": "bool",
								"name": "rate",
								"type": "bool"
							}
						],
						"internalType": "struct Shops.LikeDislike[]",
						"name": "likeDislikes",
						"type": "tuple[]"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "owner",
								"type": "address"
							},
							{
								"internalType": "string",
								"name": "comment",
								"type": "string"
							}
						],
						"internalType": "struct Shops.ReviewComment[]",
						"name": "comments",
						"type": "tuple[]"
					}
				],
				"internalType": "struct Shops.Journal[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "members",
		"outputs": [
			{
				"internalType": "address",
				"name": "user_ShopAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "user_Name",
				"type": "string"
			},
			{
				"internalType": "bytes32",
				"name": "user_Password",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "user_Role",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "user_RoleActive",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "user_Status",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "user_AutorizationStatus",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]