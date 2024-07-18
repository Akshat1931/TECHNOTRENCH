const userMessage = [
    ["hi", "hey", "hello"],
    ["track my order", "order status", "where is my order"],
    ["recommendations for laptop", "good laptop"],
    ["tell me a joke"],
    ["what's your name", "your name"],
    ["goodbye", "bye", "take care"],
    ["thanks", "thank you"],
    ["problems with order", "issue with order", "help with order"],
    ["return an item", "refund process", "how to return"],
    ["delivery time", "shipping duration", "when will I receive my order"],
    ["payment methods", "how to pay", "accepted payment options"],
    ["product availability", "out of stock items", "restock information"],
    ["cancel order", "cancel my order", "how to cancel order"],
    ["contact customer support", "speak to a representative", "live chat support"],
    ["complaints", "file a complaint", "escalate issue"],
    ["promo codes", "discounts", "current offers"],
    ["account issues", "login problems", "forgot password"],
    ["international shipping", "shipping outside country", "global delivery"],
    ["gift cards", "purchase gift card", "gift options"],
    ["product details", "specifications", "features"],
    ["exchange policy", "exchange my item", "how to exchange"],
    ["unsubscribe", "opt-out", "stop emails"],
    ["order confirmation", "did my order go through", "order verification"],
    ["check warranty", "warranty information", "product warranty"],
    ["track shipment", "shipment details", "where is my shipment"],
    ["bulk orders", "large quantity purchase", "bulk discounts"],
    ["technical support", "help with technical issue", "troubleshooting"],
    ["product reviews", "customer feedback", "review ratings"],
    ["price match", "matching prices", "price guarantee"],
    ["loyalty program", "membership benefits", "rewards points"],
    ["size guide", "fitting information", "sizing chart"],
    ["gift wrapping", "gift packaging", "wrapping options"],
    ["order history", "previous orders", "view order history"],
    ["mobile app support", "app troubleshooting", "mobile application help"],
    ["holiday hours", "customer service hours", "support availability"],
    ["product recommendations", "bestsellers", "popular products"],
    ["customer feedback", "suggestions", "improvements"],
    ["website navigation", "how to find products", "search tips"],
    ["product comparison", "compare products", "which is better"],
    ["product returns", "exchange policy", "return procedure"],
    ["order customization", "personalized orders", "customization options"],
    ["business inquiries", "partnerships", "collaborations"],
    ["privacy policy", "data protection", "personal information"],
    ["security concerns", "fraud prevention", "secure payments"],
    ["social media", "follow us", "connect on social"],
    ["job opportunities", "career at our company", "join our team"],
    ["customer testimonials", "reviews", "what others say"],
    ["subscription benefits", "membership perks", "subscribe"],
    ["gift ideas", "gift recommendations", "gift guides"],
    ["product maintenance", "care instructions", "maintenance tips"],
    ["local store information", "find a store near me", "store locator"],
    ["community involvement", "charity partnerships", "social responsibility"],
    ["environmental initiatives", "sustainability efforts", "green practices"],
    ["product recalls", "recall information", "product safety"],
    ["media inquiries", "press releases", "interview requests"],
    ["legal inquiries", "terms of service", "legal compliance"],
    ["mobile notifications", "app alerts", "push notifications"],
    ["site performance", "website speed", "loading issues"]
];

const botReply = [
    ["Hello!", "Hi there!", "Hey!"],
    ["Let me check your order status."],
    ["How about checking our latest laptop arrivals?"],
    ["Sure, here's one: Why did the computer go to the doctor? Because it had a virus!"],
    ["I'm just a bot."],
    ["Goodbye! Take care!", "See you later!"],
    ["You're welcome!", "No problem!"],
    ["I'm sorry to hear that. Please provide your order details so I can assist you better."],
    ["To start a return, please visit our Returns & Refunds page or contact our support team."],
    ["Delivery times vary depending on your location. Please check our Shipping Information page for details."],
    ["We accept various payment methods including credit/debit cards, PayPal, and more. You can find details on our Payment Options page."],
    ["Product availability may change. Please check our website frequently for updates."],
    ["You can cancel your order within the specified timeframe by visiting your Order History or contacting us."],
    ["For immediate assistance, please visit our Contact Us page or use our live chat feature."],
    ["Please provide details of your complaint so we can address it promptly."],
    ["For current promotions and discounts, please check our Offers & Promotions page."],
    ["If you're having account issues, please try resetting your password or contact our support team."],
    ["We offer international shipping to select countries. Please check our Shipping Information page for details."],
    ["Gift cards are available for purchase on our website. You can find more information on our Gift Cards page."],
    ["For detailed product information, including specifications and features, please visit the product page."],
    ["Our exchange policy allows you to exchange items within a specified timeframe. Visit our Returns & Exchanges page for details."],
    ["You can manage your email preferences in your account settings or contact our support team for assistance."],
    ["Once your order is confirmed, you'll receive an email with your order details. Please check your inbox or spam folder."],
    ["Please check the warranty details on the product page or contact our support for assistance."],
    ["You can track your shipment using the tracking number provided in your order confirmation email."],
    ["For bulk orders and discounts, please contact our sales team or visit our Bulk Order page."],
    ["For technical issues, please visit our Technical Support page or contact our support team for assistance."],
    ["We value your feedback! Please leave a product review on our website to help others make informed decisions."],
    ["We offer price match guarantee on select items. Please check our Price Match policy for details."],
    ["Join our loyalty program to enjoy exclusive benefits and rewards points. Visit our Loyalty Program page to learn more."],
    ["Find the perfect fit with our size guide available on each product page. If you need further assistance, feel free to contact us."],
    ["Add a personal touch with our gift wrapping options available during checkout."],
    ["View your order history and track current orders in your account dashboard."],
    ["For assistance with our mobile app, please check our App Support page or contact our app support team."],
    ["Our customer service is available during business hours. For holiday hours, please check our Support Availability page."],
    ["Here are some popular products you might like:"],
    ["We appreciate your feedback! Please share any suggestions or improvements you have in mind."],
    ["You can easily find products by using our search bar or browsing through categories."],
    ["Compare product features and specifications to make the best choice for your needs."],
    ["For returns and exchanges, please follow our Return Procedure outlined on our website."],
    ["Customize your order with our personalized options available at checkout."],
    ["For business inquiries, partnerships, or collaborations, please contact our business development team."],
    ["Your privacy is important to us. Read our Privacy Policy for information on data protection and personal information."],
    ["We take security seriously. Learn about our fraud prevention measures and secure payment options."],
    ["Stay connected! Follow us on social media for updates, promotions, and more."],
    ["Explore career opportunities and join our team! Check our Careers page for current job openings."],
    ["Read what our customers are saying! Check out our customer testimonials and reviews."],
    ["Subscribe to our newsletter for exclusive benefits, membership perks, and updates."],
    ["Looking for gift ideas? Check out our curated gift recommendations and gift guides."],
    ["Learn how to care for your products with our maintenance tips and care instructions."],
    ["Find a store near you with our store locator. Visit our Local Stores page for more information."],
    ["Discover our commitment to community involvement, charity partnerships, and social responsibility."],
    ["Learn about our environmental initiatives and efforts towards sustainability and green practices."],
    ["Stay informed about product recalls and safety alerts. Visit our Product Safety page for more information."],
    ["For media inquiries, press releases, or interview requests, please contact our media relations team."],
    ["For legal inquiries, terms of service, and compliance information, please refer to our Legal section."],
    ["Receive mobile notifications and app alerts by enabling push notifications in your app settings."],
    ["For site performance issues or concerns about website speed, please report any loading issues to our support team."]
];

const alternative = [
    "Sorry, I didn't catch that. Can you please repeat?",
    "Could you please ask something else?",
    "I'm here. What's on your mind?"
];

const synth = window.speechSynthesis;

function voiceControl(string) {
    let u = new SpeechSynthesisUtterance(string);
    u.text = string;
    u.lang = "en-US";
    u.volume = 1;
    u.rate = 1;
    u.pitch = 1;
    synth.speak(u);
}

function sendMessage() {
    const inputField = document.getElementById("input");
    let input = inputField.value.trim();
    input != "" && output(input);
    inputField.value = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {
            let input = inputField.value.trim();
            input != "" && output(input);
            inputField.value = "";
        }
    });
});

function output(input) {
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

    let comparedText = compare(userMessage, botReply, text);

    let product = comparedText ? comparedText : alternative[Math.floor(Math.random() * alternative.length)];
    addChat(input, product);
}

function compare(triggerArray, replyArray, string) {
    for (let x = 0; x < triggerArray.length; x++) {
        for (let y = 0; y < triggerArray[x].length; y++) {
            if (triggerArray[x][y] === string) {
                return replyArray[x][Math.floor(Math.random() * replyArray[x].length)];
            }
        }
    }
    return null;
}

function addChat(input, product) {
    const mainDiv = document.getElementById("message-section");

    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.classList.add("message");
    userDiv.innerHTML = `<span id="user-response">${input}</span>`;
    mainDiv.appendChild(userDiv);

    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.classList.add("message");
    botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
    mainDiv.appendChild(botDiv);

    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;

    voiceControl(product);
}
