document.querySelector('form').addEventListener('submit', function(event) {

    


    var n1 = parseFloat(document.querySelector('#n1').value) || 1;
    var n2 = parseFloat(document.querySelector('#n2').value) || 1;
    var n3 = parseFloat(document.querySelector('#n3').value) || 0;
    var n4 = parseFloat(document.querySelector('#n4').value) || 1;
    var n5 = parseFloat(document.querySelector('#n5').value) || 1;
    var n6 = parseFloat(document.querySelector('#n6').value) || 0;




    function solution(fnum, snum, tnum, sym, n3, n6) {
        let n7;
        if (sym === 1) {
          n7 = fnum + snum;
        } else if (sym == 2){
          n7 = fnum - snum;
        }
        let n8 = n3 - n6;
        let s1 = n8 / n7;
        let n9 = fnum * s1;
        let n10 = n3 - n9;
        let s2 = n10 / tnum;
        
        return [s1, s2]
    }

    let n1d = -n1;
    let n4d = -n4;
    let n2m = -n2;
    let n5m = -n5;

    if (n1 === n4) {
    if (n1 > 0) {
        if (n4 > 0) {
        if (n2 > 0) {
            if (n5 > 0) {
            document.querySelector('h4').innerHTML = `Both's form must be: ''(ax + by = c)'' where a of one = a of other`;
            } else {
            document.querySelector('h4').innerHTML = `One's form must be: ''(ax + by = c)''`;
            document.querySelector('h4').innerHTML += `While the other must be: ''(ax - by = c)'' where a of one = a of other`;
            }
        } else {
            if (n5 < 0) {
            document.querySelector('h4').innerHTML = `Both's form must be: ''(ax - by = c)'' where a of one = a of other`;
            } else {
            document.querySelector('h4').innerHTML = `One's form must be: ''(ax - by = c)''`;
            document.querySelector('h4').innerHTML += `While the other must be: ''(ax + by = c)'' where a of one = a of other`;
            }
        }
        } else {
        if (n2 > 0) {
            if (n5 > 0) {
            document.querySelector('h4').innerHTML = `One's form must be: ''(ax + by = c)''`;
            document.querySelector('h4').innerHTML += `While the other's must be: ''(-ax + by = c)'' where a of one = a of other`;
            } else {
            document.querySelector('h4').innerHTML = `One's form must be: ''(ax + by = c)''`;
            document.querySelector('h4').innerHTML += `While the other's must be: ''(-ax - by = c)'' where a of one = a of other`;
            }
        } else {
            if (n5 > 0) {
            document.querySelector('h4').innerHTML = `One's form must be: ''(ax - by = c)''`;
            document.querySelector('h4').innerHTML += `While the other's must be: ''(-ax + by = c)'' where a of one = a of other`;
            } else {
            document.querySelector('h4').innerHTML = `Both's form must be: ''(ax - by = c)'' where a of one = a of other`;
            }
        }
        }
    } else if (n1 < 0) {
        if (n4 < 0) {
        if (n2 < 0) {
            if (n5 < 0) {
            document.querySelector('h4').innerHTML = `Both's form must be: ''(-ax - by = c)'' where a of one = a of other`;
            } else {
            document.querySelector('h4').innerHTML = `One's form must be: ''(-ax - by = c)''`;
            document.querySelector('h4').innerHTML += `While the other's must be: ''(-ax + by = c)'' where a of one = a of other`;
            }
        } else {
            if (n5 < 0) {
            document.querySelector('h4').innerHTML = `One's form must be: ''(-ax + by = c)''`;
            document.querySelector('h4').innerHTML += `While the other's must be: ''(-ax - by = c)'' where a of one = a of other`;
            } else {
            document.querySelector('h4').innerHTML = `Both's form must be: ''(-ax + by = c)'' where a of one = a of other`;
            }
        }
        }
    }
     
    let result = solution(n2,n5, n1, 2, n3, n6);
    y = result[0];
    x = result[1];
    } else if (n2 === n5) {
    if (n2 > 0) {
        if (n1 > 0) {
        if (n4 > 0) {
            document.querySelector('h4').innerHTML = `Both's form must be: ''(ax + by = c)'' where b of one = b of other`;
        } else {
            document.querySelector('h4').innerHTML = `One's form must be: ''(ax + by = c)''`;
            document.querySelector('h4').innerHTML += `While the other's must be: ''(-ax + by = c)'' where b of one = b of other`;
        }
        } else {
        if (n4 < 0) {
            document.querySelector('h4').innerHTML = `Both's form must be: ''(-ax + by = c)'' where b of one = b of other`;
        } else {
            document.querySelector('h4').innerHTML = `One's form must be: ''(-ax + by = c)''`;
            document.querySelector('h4').innerHTML += `While the other's must be: ''(ax + by = c)'' where b of one = b of other`;
        }
        }
    } else {
        if (n1 > 0) {
        if (n4 > 0) {
            document.querySelector('h4').innerHTML = `Both's form must be: ''(ax - by = c)'' where b of one = b of other`;
        } else {
            document.querySelector('h4').innerHTML = `One's form must be: ''(ax - by = c)''`;
            document.querySelector('h4').innerHTML += `While the other's must be: ''(-ax - by = c)'' where b of one = b of other`;
        }
        } else {
        if (n4 < 0) {
            document.querySelector('h4').innerHTML = `Both's form must be: ''(-ax - by = c)'' where b of one = b of other`;
        } else {
            document.querySelector('h4').innerHTML = `One's form must be: ''(ax - by = c)''`;
            document.querySelector('h4').innerHTML += `While the other's must be: ''(-ax - by = c)'' where b of one = b of other`;
        }
        }
    }
    let result = solution(n1, n4, n2, 2, n3, n6);
    x = result[0];
    y = result[1];
    } else if (n1 === n4d) {
    if (n2 > 0) {
        if (n5 > 0) {
        document.querySelector('h4').innerHTML = `Ones's form must be: ''(ax + by = c)''`;
        document.querySelector('h4').innerHTML += `While the other's must be: ''(-ax + by = c)'' where a is the inverse of the other a`;
        } else {
        document.querySelector('h4').innerHTML = `Ones's form must be: ''(ax + by = c)''`;
        document.querySelector('h4').innerHTML += `While the other's must be: ''(-ax - by = c)'' where a is the inverse of the other a`;
        }
    } else {
        if (n5 < 0) {
        document.querySelector('h4').innerHTML = `Ones's form must be: ''(ax - by = c)''`;
        document.querySelector('h4').innerHTML += `While the other's must be: ''(-ax - by = c)'' where a is the inverse of the other a`;
        } else {
        document.querySelector('h4').innerHTML = `Ones's form must be: ''(ax - by = c)''`;
        document.querySelector('h4').innerHTML += `While the other's must be: ''(-ax + by = c)'' where a is the inverse of the other a`;
        }
    }
     
    let result = solution(n2, n5, n1, 1, n3, n6);
    y = result[0];
    x = result[1];
    } else if (n1d === n4) {
    if (n2 > 0) {
        if (n5 > 0) {
        document.querySelector('h4').innerHTML = `Ones's form must be: ''(-ax + by = c)''`;
        document.querySelector('h4').innerHTML += `While the other's must be: ''(ax + by = c)'' where a is the inverse of the other a`;
        } else {
        document.querySelector('h4').innerHTML = `Ones's form must be: ''(-ax + by = c)''`;
        document.querySelector('h4').innerHTML += `While the other's must be: ''(ax - by = c)'' where a is the inverse of the other a`;
        }
    } else {
        if (n5 < 0) {
        document.querySelector('h4').innerHTML = `Ones's form must be: ''(-ax - by = c)''`;
        document.querySelector('h4').innerHTML += `While the other's must be: ''(ax - by = c)'' where a is the inverse of the other a`;
        } else {
        document.querySelector('h4').innerHTML = `Ones's form must be: ''(-ax + by = c)''`;
        document.querySelector('h4').innerHTML += `While the other's must be: ''(ax - by = c)'' where a is the inverse of the other a`;
        }
    }
     
    let result = solution(n2, n5, n1, 1, n3, n6);
    y = result[0];
    x = result[1];
    } else if (n5 === n2m) {
    if (n1 > 0) {
        if (n4 > 0) {
        document.querySelector('h4').innerHTML = `Ones's form must be: ''(ax - by = c)''`;
        document.querySelector('h4').innerHTML += `While the other's must be: ''(ax + by = c)'' where b is the inverse of the other b`;
        } else {
        document.querySelector('h4').innerHTML = `Ones's form must be: ''(ax - by = c)''`;
        document.querySelector('h4').innerHTML += `While the other's must be: ''(-ax + by = c)'' where b is the inverse of the other b`;
        }
    } else {
        if (n4 < 0) {
        document.querySelector('h4').innerHTML = `Ones's form must be: ''(ax - by = c)''`;
        document.querySelector('h4').innerHTML += `While the other's must be: ''(ax + by = c)'' where b is the inverse of the other b`;
        } else {
        document.querySelector('h4').innerHTML = `Ones's form must be: ''(ax - by = c)''`;
        document.querySelector('h4').innerHTML += `While the other's must be: ''(-ax - by = c)'' where b is the inverse of the other b`;
        }
    }
     
    let result = solution(n1, n4, n2, 1, n3, n6);
    x = result[0];
    y = result[1];

    } else if (n5m === n2) {
    if (n1 > 0) {
        if (n4 > 0) {
        document.querySelector('h4').innerHTML = `Ones's form must be: ''(ax + by = c)''`;
        document.querySelector('h4').innerHTML += `While the other's must be: ''(ax - by = c)'' where b is the inverse of the other b`;
        } else {
        document.querySelector('h4').innerHTML = `Ones's form must be: ''(ax + by = c)''`;
        document.querySelector('h4').innerHTML += `While the other's must be: ''(-ax - by = c)'' where b is the inverse of the other b`;
        }
    } else {
        if (n4 > 0) {
        document.querySelector('h4').innerHTML = `Ones's form must be: ''(-ax + by = c)''`;
        document.querySelector('h4').innerHTML += `While the other's must be: ''(ax - by = c)'' where b is the inverse of the other b`;
        } else {
        document.querySelector('h4').innerHTML = `Ones's form must be: ''(-ax + by = c)''`;
        document.querySelector('h4').innerHTML += `While the other's must be: ''(-ax - by = c)'' where b is the inverse of the other b`;
        }
    }
     
    let result = solution(n1, n4, n2, 1, n3, n6);
    x = result[0];
    y = result[1];
    alert(result)
    alert(x)
    alert(y)
    } else {
    if (n1 !== n4) {
        if (n2 !== n5) {
        if (n1 > 0) {
            if (n4 > 0) {
            if (n2 > 0) {
                if (n5 > 0) {
                document.querySelector('h4').innerHTML = `Both's forms must be: ''(ax + by = c)'' where none of the values are equal`;
                } else {
                document.querySelector('h4').innerHTML = `Ones's form must be: ''(ax + by = c)''`;
                document.querySelector('h4').innerHTML += `While the other's must be: ''(ax - by = c)'' where none of the values are equal`;
                }
            } else {
                if (n5 > 0) {
                document.querySelector('h4').innerHTML = `Ones's form must be: ''(ax - by = c)''`;
                document.querySelector('h4').innerHTML += `While the other's must be: ''(ax + by = c)'' where none of the values are equal`;
                } else {
                document.querySelector('h4').innerHTML = `Both's form must be: ''(ax - by = c)'' where none of the values are equal`;
                }
            }
            } else {
            if (n2 > 0) {
                if (n5 > 0) {
                document.querySelector('h4').innerHTML = `Ones's form must be: ''(ax + by = c)''`;
                document.querySelector('h4').innerHTML += `While the other's must be: ''(-ax + by = c)'' where none of the values are equal`;
                } else {
                document.querySelector('h4').innerHTML = `Ones's form must be: ''(ax + by = c)''`;
                document.querySelector('h4').innerHTML += `While the other's must be: ''(-ax - by = c)'' where none of the values are equal`;
                }
            } else {
                if (n5 > 0) {
                document.querySelector('h4').innerHTML = `Ones's form must be: ''(ax - by = c)''`;
                document.querySelector('h4').innerHTML += `While the other's must be: ''(-ax + by = c)'' where none of the values are equal`;
                } else {
                document.querySelector('h4').innerHTML = `Both's form must be: ''(ax - by = c)'' where none of the values are equal`;
                }
            }
            }
        } else {
            if (n4 > 0) {
            if (n2 > 0) {
                if (n5 > 0) {
                document.querySelector('h4').innerHTML = `Ones's form must be: ''(-ax + by = c)''`;
                document.querySelector('h4').innerHTML += `While the other's must be: ''(ax + by = c)'' where none of the values are equal`;
                } else {
                document.querySelector('h4').innerHTML = `Ones's form must be: ''(-ax + by = c)''`;
                document.querySelector('h4').innerHTML += `While the other's must be: ''(ax - by = c)'' where none of the values are equal`;
                }
            } else {
                if (n5 > 0) {
                document.querySelector('h4').innerHTML = `Ones's form must be: ''(-ax - by = c)''`;
                document.querySelector('h4').innerHTML += `While the other's must be: ''(ax + by = c)'' where none of the values are equal`;
                } else {
                document.querySelector('h4').innerHTML = `Ones's form must be: ''(-ax - by = c)''`;
                document.querySelector('h4').innerHTML += `While the other's must be: ''(ax - by = c)'' where none of the values are equal`;
                }
            }
            } else {
            if (n2 > 0) {
                if (n5 > 0) {
                document.querySelector('h4').innerHTML = `Both's form must be: ''(-ax + by = c)'' where none of the values are equal`;
                } else {
                document.querySelector('h4').innerHTML = `Ones's form must be: ''(-ax + by = c)''`;
                document.querySelector('h4').innerHTML += `While the other's must be: ''(-ax - by = c)'' where none of the values are equal`;
                }
            } else {
                if (n5 > 0) {
                document.querySelector('h4').innerHTML = `Ones's form must be: ''(-ax - by = c)''`;
                document.querySelector('h4').innerHTML += `While the other's must be: ''(-ax + by = c)'' where none of the values are equal`;
                } else {
                document.querySelector('h4').innerHTML = `Both's form must be: ''(-ax - by = c)'' where none of the values are equal`;
                }
            }
            }
        }
        }
    }

    
    let n13 = n2 * n4;
    let n14 = n3 * n4;
    let n15 = n5 * n1;
    let n16 = n6 * n1;
    let n17 = n13 - n15;   
    let n18 = n14 - n16;    
    y = n18 / n17;
    let n19 = n2 * y;
    let n20 = n3 - n19;    
    x = n20 / n1;
    }

    document.querySelector('h2').innerHTML = `x = ${x || 'Unknown'} : y = ${y || 'Unknown ; Please Enter Values Properly'}`;

    event.preventDefault();
});