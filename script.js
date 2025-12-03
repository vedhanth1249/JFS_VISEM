function showInventor() {
    const inventor = document.getElementById("inventorList").value;

    const data = {
        gosling: {
            img: "/Users/yelishettyvedhanth/Downloads/gossling.jpeg",
            info: "James Gosling is the creator of Java, developed at Sun Microsystems in 1995."
        },
        rossum: {
            img: "/Users/yelishettyvedhanth/Downloads/rossum.jpeg",
            info: "Guido van Rossum created Python in 1991 and is known as the 'Benevolent Dictator For Life' of Python."
        },
        ritchie: {
            img: "/Users/yelishettyvedhanth/Downloads/ritchii.jpeg",
            info: "Dennis Ritchie created the C programming language at Bell Labs in 1972."
        },
        stroustrup: {
            img: "/Users/yelishettyvedhanth/Downloads/stroustrup.jpeg",
            info: "Bjarne Stroustrup developed C++ as an extension of C beginning in 1979."
        },
        eich: {
            img: "/Users/yelishettyvedhanth/Downloads/eich.jpeg",
            info: "Brendan Eich created JavaScript in 1995 while working at Netscape."
        },
        lerdorf: {
            img: "/Users/yelishettyvedhanth/Downloads/lerdorf.jpeg",
            info: "Rasmus Lerdorf created PHP in 1994 originally as CGI scripts."
        },
        matsumoto: {
            img: "/Users/yelishettyvedhanth/Downloads/Yukihiro Matsumoto.jpeg",
            info: "Yukihiro 'Matz' Matsumoto created Ruby in 1995 focusing on simplicity and productivity."
        },
        hejlsberg: {
            img: "/Users/yelishettyvedhanth/Downloads/Anders Hejlsberg .jpeg",
            info: "Anders Hejlsberg developed C# for Microsoft in 2000."
        },
        hopper: {
            img: "/Users/yelishettyvedhanth/Downloads/race Hopper.jpeg",
            info: "Grace Hopper created COBOL and pioneered compiler technology."
        },
        mccarthy: {
            img: "/Users/yelishettyvedhanth/Downloads/John McCarthy.jpeg",
            info: "John McCarthy created Lisp in 1958 and is considered one of the founders of AI."
        }
    };

    if (inventor === "") {
        document.getElementById("inventorImage").src = "";
        document.getElementById("infoBox").innerText = "Select an inventor to view details";
    } else {
        document.getElementById("inventorImage").src = data[inventor].img;
        document.getElementById("infoBox").innerText = data[inventor].info;
    }
}