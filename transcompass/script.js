function UpdateImage() {
    var o1, o2, o3, o4, o5, o6, o7, o8, board;
    o1 = document.getElementById("po1"); /* Do you like to program? */
    o2 = document.getElementById("po2"); /* Do you like to program? */
    o3 = document.getElementById("mo1"); /* Do you want someone to be your master? */
    o4 = document.getElementById("mo2"); /* Do you want someone to be your master? */
    o5 = document.getElementById("no1"); /* Are you shocked by seeing people naked? */
    o6 = document.getElementById("no2"); /* Are you shocked by seeing people naked? */
    o7 = document.getElementById("go1"); /* Do you like guns? */
    o8 = document.getElementById("go2"); /* Do you like guns? */
    board = document.getElementById("board");
    
    board.src = "board.png";
    if (o1.checked == true && o2.checked == false) {
        if (o7.checked == true && o8.checked == false) { 
            if (o3.checked == true && o4.checked == false) { 
                if (o5.checked == true && o6.checked == false) { 
                    board.src = "board8.png";
                }
            }
        }
    }
    if (o1.checked == true && o2.checked == false) {
        if (o7.checked == true && o8.checked == false) { 
            if (o3.checked == false && o4.checked == true) { 
                if (o5.checked == false && o6.checked == true) { 
                    board.src = "board8.png";
                }
            }
        }
    }
    if (o1.checked == false && o2.checked == true) {
        if (o7.checked == false && o8.checked == true) { 
            if (o3.checked == true && o4.checked == false) { 
                if (o5.checked == true && o6.checked == false) { 
                    board.src = "board8.png";
                }
            }
        }
    }
    if (o1.checked == false && o2.checked == true) {
        if (o7.checked == false && o8.checked == true) { 
            if (o3.checked == false && o4.checked == true) { 
                if (o5.checked == false && o6.checked == true) { 
                    board.src = "board8.png";
                }
            }
        }
    }
    if (o1.checked == true && o2.checked == false) {
        if (o7.checked == false && o8.checked == true) { 
            if (o3.checked == true && o4.checked == false) { 
                if (o5.checked == true && o6.checked == false) { 
                    board.src = "board7.png";
                }
            }
        }
    }
    if (o1.checked == true && o2.checked == false) {
        if (o7.checked == false && o8.checked == true) { 
            if (o3.checked == false && o4.checked == true) { 
                if (o5.checked == true && o6.checked == false) { 
                    board.src = "board6.png";
                }
            }
        }
    }
    if (o1.checked == true && o2.checked == false) {
        if (o7.checked == true && o8.checked == false) { 
            if (o3.checked == false && o4.checked == true) { 
                if (o5.checked == true && o6.checked == false) { 
                    board.src = "board5.png";
                }
            }
        }
    }
    if (o1.checked == false && o2.checked == true) {
        if (o7.checked == true && o8.checked == false) { 
            if (o3.checked == false && o4.checked == true) { 
                if (o5.checked == true && o6.checked == false) { 
                    board.src = "board4.png";
                }
            }
        }
    }
    if (o1.checked == false && o2.checked == true) {
        if (o7.checked == true && o8.checked == false) { 
            if (o3.checked == true && o4.checked == false) { 
                if (o5.checked == true && o6.checked == false) { 
                    board.src = "board3.png";
                }
            }
        }
    }
    if (o1.checked == false && o2.checked == true) {
        if (o7.checked == true && o8.checked == false) { 
            if (o3.checked == true && o4.checked == false) { 
                if (o5.checked == false && o6.checked == true) { 
                    board.src = "board2.png";
                }
            }
        }
    }
    if (o1.checked == true && o2.checked == false) {
        if (o7.checked == false && o8.checked == true) { 
            if (o3.checked == true && o4.checked == false) { 
                if (o5.checked == false && o6.checked == true) { 
                    board.src = "board1.png";
                }
            }
        }
    }
    if (o1.checked == true && o2.checked == false) {
        if (o7.checked == true && o8.checked == false) { 
            if (o3.checked == true && o4.checked == false) { 
                if (o5.checked == false && o6.checked == true) { 
                    board.src = "board9.png";
                }
            }
        }
    }
    if (o1.checked == false && o2.checked == true) {
        if (o7.checked == true && o8.checked == false) { 
            if (o3.checked == true && o4.checked == false) { 
                if (o5.checked == true && o6.checked == false) { 
                    board.src = "board3.png";
                }
            }
        }
    }
    if (o1.checked == false && o2.checked == true) {
        if (o7.checked == true && o8.checked == false) { 
            if (o3.checked == true && o4.checked == false) { 
                if (o5.checked == true && o6.checked == false) { 
                    board.src = "board3.png";
                }
            }
        }
    }
    if (o1.checked == false && o2.checked == true) {
        if (o7.checked == false && o8.checked == true) { 
            if (o3.checked == true && o4.checked == false) { 
                if (o5.checked == false && o6.checked == true) { 
                    board.src = "board9.png";
                }
            }
        }
    }
    if (o1.checked == false && o2.checked == true) {
        if (o7.checked == false && o8.checked == true) { 
            if (o3.checked == false && o4.checked == true) { 
                if (o5.checked == true && o6.checked == false) { 
                    board.src = "board5.png";
                }
            }
        }
    }
    if (o1.checked == true && o2.checked == false) {
        if (o7.checked == false && o8.checked == true) { 
            if (o3.checked == false && o4.checked == true) { 
                if (o5.checked == false && o6.checked == true) { 
                    board.src = "board7.png";
                }
            }
        }
    }
    if (o1.checked == false && o2.checked == true) {
        if (o7.checked == true && o8.checked == false) { 
            if (o3.checked == false && o4.checked == true) { 
                if (o5.checked == false && o6.checked == true) { 
                    board.src = "board3.png";
                }
            }
        }
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    if (o7.checked == false && o8.checked == false) { 
        o7.scrollIntoView();
        document.getElementById(id="title4").classList.add("red");
    } else {
        document.getElementById(id="title4").classList.remove("red");
    }
    if (o5.checked == false && o6.checked == false) { 
        o5.scrollIntoView();
        document.getElementById(id="title3").classList.add("red");
    } else {
        document.getElementById(id="title3").classList.remove("red");
    }
    if (o3.checked == false && o4.checked == false) { 
        o3.scrollIntoView();
        document.getElementById(id="title2").classList.add("red");
    } else {
        document.getElementById(id="title2").classList.remove("red");
    }
    if (o1.checked == false && o2.checked == false) { 
        o1.scrollIntoView();
        document.getElementById(id="title1").classList.add("red");
    } else {
        document.getElementById(id="title1").classList.remove("red");
    }
}
function UpdateRadio() {
    var o1, o2, o3, o4, o5, o6, o7, o8, l1, l2, l3, l4, l5, l6, l7, l8;
    o1 = document.getElementById("po1");
    o2 = document.getElementById("po2");
    o3 = document.getElementById("mo1");
    o4 = document.getElementById("mo2"); 
    o5 = document.getElementById("no1");
    o6 = document.getElementById("no2"); 
    o7 = document.getElementById("go1");
    o8 = document.getElementById("go2"); 
    l1 = document.getElementById("l1");
    l2 = document.getElementById("l2");
    l3 = document.getElementById("l3");
    l4 = document.getElementById("l4"); 
    l5 = document.getElementById("l5");
    l6 = document.getElementById("l6"); 
    l7 = document.getElementById("l7");
    l8 = document.getElementById("l8"); 
    
    if (o1.checked == false) { 
        l1.src = "yes_deactive.png";
    } else {
        l1.src = "yes_active.png";
    }
    if (o2.checked == false) { 
        l2.src = "no_deactive.png";
    } else {
        l2.src = "no_active.png";
    }
    if (o3.checked == false) { 
        l3.src = "yes_deactive.png";
    } else {
        l3.src = "yes_active.png";
    }
    if (o4.checked == false) { 
        l4.src = "no_deactive.png";
    } else {
        l4.src = "no_active.png";
    }
    if (o5.checked == false) { 
        l5.src = "yes_deactive.png";
    } else {
        l5.src = "yes_active.png";
    }
    if (o5.checked == false) { 
        l5.src = "yes_deactive.png";
    } else {
        l5.src = "yes_active.png";
    }
    if (o6.checked == false) { 
        l6.src = "no_deactive.png";
    } else {
        l6.src = "no_active.png";
    }
    if (o7.checked == false) { 
        l7.src = "yes_deactive.png";
    } else {
        l7.src = "yes_active.png";
    }
    if (o8.checked == false) { 
        l8.src = "no_deactive.png";
    } else {
        l8.src = "no_active.png";
    }
}