function showInventor() {
    const inventor = document.getElementById("inventorList").value;

    const data = {
        gosling: {
            img: "/Users/yelishettyvedhanth/Library/Mobile Documents/com~apple~CloudDocs/cdc/jfs/JFS_VISEM/inventors/gossling.jpeg",
            info: "James Gosling is the creator of Java, developed at Sun Microsystems in 1995."
        },
        rossum: {
            img: "/Users/yelishettyvedhanth/Library/Mobile Documents/com~apple~CloudDocs/cdc/jfs/JFS_VISEM/inventors/rossum.jpeg",
            info: "Guido van Rossum created Python in 1991 and is known as the 'Benevolent Dictator For Life' of Python."
        },
        ritchie: {
            img: "/Users/yelishettyvedhanth/Library/Mobile Documents/com~apple~CloudDocs/cdc/jfs/JFS_VISEM/inventors/ritchii.jpeg",
            info: "Dennis Ritchie created the C programming language at Bell Labs in 1972."
        },
        stroustrup: {
            img: "/Users/yelishettyvedhanth/Library/Mobile Documents/com~apple~CloudDocs/cdc/jfs/JFS_VISEM/inventors/stroustrup.jpeg",
            info: "Bjarne Stroustrup developed C++ as an extension of C beginning in 1979."
        },
        eich: {
            img: "/Users/yelishettyvedhanth/Library/Mobile Documents/com~apple~CloudDocs/cdc/jfs/JFS_VISEM/inventors/eich.jpeg",
            info: "Brendan Eich created JavaScript in 1995 while working at Netscape."
        },
        lerdorf: {
            img: "/Users/yelishettyvedhanth/Library/Mobile Documents/com~apple~CloudDocs/cdc/jfs/JFS_VISEM/inventors/lerdorf.jpeg",
            info: "Rasmus Lerdorf created PHP in 1994 originally as CGI scripts."
        },
        matsumoto: {
            img: "/Users/yelishettyvedhanth/Library/Mobile Documents/com~apple~CloudDocs/cdc/jfs/JFS_VISEM/inventors/Yukihiro Matsumoto.jpeg",
            info: "Yukihiro 'Matz' Matsumoto created Ruby in 1995 focusing on simplicity and productivity."
        },
        hejlsberg: {
            img: "/Users/yelishettyvedhanth/Library/Mobile Documents/com~apple~CloudDocs/cdc/jfs/JFS_VISEM/inventors/Anders Hejlsberg .jpeg",
            info: "Anders Hejlsberg developed C# for Microsoft in 2000."
        },
        hopper: {
            img: "/Users/yelishettyvedhanth/Library/Mobile Documents/com~apple~CloudDocs/cdc/jfs/JFS_VISEM/inventors/race Hopper.jpeg",
            info: "Grace Hopper created COBOL and pioneered compiler technology."
        },
        mccarthy: {
            img: "/Users/yelishettyvedhanth/Library/Mobile Documents/com~apple~CloudDocs/cdc/jfs/JFS_VISEM/inventors/John McCarthy.jpeg",
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