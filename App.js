const heading = React.createElement("div",{id:"div1"},
React.createElement("div",{id:"div2"},[
    React.createElement("h1",{id:"heading"},"Namaste React ting tong "),
    React.createElement("h2",{id:"heading"},"Namaste React ting tong 2 ")
]
));
const root1 = ReactDOM.createRoot(document.getElementById("root123"));
root1.render(heading);