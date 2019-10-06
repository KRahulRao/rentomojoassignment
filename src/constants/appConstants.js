const appConstants = {
        renderObject: [
            { lhs: "Account", operator: ["Contains","Not Contains"],rhs:[1,2,3,4,5,6,7,8,9,10] },
            { lhs: "Country", operator: ["Contains","Not Contains"],rhs:['country1','country2','country3','country4','country5'] },
            { lhs: "Campaign Name", operator: ["Starts with","Contains","Not Contains"] },
            { lhs: "Revenue", operator: [">", "<",">=","<=","=","!="]  },
        ],
        // instruction: [<AWSInstruction />]
}
export default appConstants;