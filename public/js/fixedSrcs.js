var finished = 0;
var target = 100; // Arbitrary value

searchButton = function (event) {
    event.preventDefault();
    finished = 0;
    target = 6;
    var name = document.getElementById("nameInput").value;
    var aff = document.getElementById("affiliationInput").value;
    JustiaSearch(name, aff, function(data) {
        request({
            method: "POST",
            uri: window.location.href + "/update/Justia",
            json: {
                "data": data,
                "search": {"name": name, "affiliation": aff}
            }
        }, function (err, res, body) {
            console.log("Updated Justia");
            submitSearch();
        })
    }, function (err) {
        submitSearch();
    });
    // IEEESearch(name, aff, function(data) {
    //     request({
    //         method: "POST",
    //         uri: window.location.href + "/update/IEEE",
    //         json: {
    //             "data": data,
    //             "search": {"name": name, "affiliation": aff}
    //         }
    //     }, function (err, res, body) {
    //         console.log("Updated IEEE");
    //         submitSearch();
    //     })
    // }, function (err) {
    //     console.log("IEEE ERROR");
    //     submitSearch();
    // });
    scopus(name, aff, function(data) {
        request({
            method: "POST",
            uri: window.location.href + "/update/Scopus",
            json: {
                "data": data,
                "search": {"name": name, "affiliation": aff}
            }
        }, function (err, res, body) {
            console.log("Updated Scopus");
            submitSearch();
        })
    }, function (err) {
        console.log("SCOPUS ERROR");
        submitSearch();
    });
    scienceDirect(name, aff, function(data) {
        request({
            method: "POST",
            uri: window.location.href + "/update/ScienceDirect",
            json: {
                "data": data,
                "search": {"name": name, "affiliation": aff}
            }
        }, function (err, res, body) {
            console.log("Updated Science Direct");
            //19b4b3546222699157deac547bc8e232
            submitSearch();
        })
    }, function (err) {
        console.log("ScienceDirect ERROR");
        submitSearch();
    });
    NSFSearch(name, aff, function(data) {
        request({
            method: "POST",
            uri: window.location.href + "/update/NSF",
            json: {
                "data": data,
                "search": {"name": name, "affiliation": aff}
            }
        }, function (err, res, body) {

            console.log("Updated NSF");
            submitSearch();
        })
    }, function (err) {
        console.log("NSF ERROR");
        submitSearch();
    });
    // USPTOSearch(name, aff, function(data) {
    //     request({
    //         method: "POST",
    //         uri: window.location.href + "/update/USPTO",
    //         json: {
    //             "data": data,
    //             "search": {"name": name, "affiliation": aff}
    //         }
    //     }, function (err, res, body) {
    //         console.log("Updated USPTO");
    //         console.log(data);
    //         submitSearch();
    //     })

    // }, function (err) {
    //     submitSearch();
    //     console.log("Error from uspto");
    // });

    DBLPSearch(name, aff, function(data) {
    request({
        method: "POST",
        uri: window.location.href + "/update/DBLP",
        json: {
            "data": data,
            "search": {"name": name, "affiliation": aff}
        }
    }, function (err, res, body) {
        console.log("Updated DBLP");

        submitSearch();
        })

    }, function (err) {
    submitSearch();
    console.log("Error from DBLP");
    });

    // GoogleScholarSearch(name, aff, function(data) {
    //     request({
    //         method: "POST",
    //         uri: window.location.href + "/update/GoogleScholar",
    //         json: {
    //             "data": data,
    //             "search": {"name": name, "affiliation": aff}
    //         }
    //     }, function (err, res, body) {

    //         console.log("Updated NSF");
    //         submitSearch();
    //     })
    // }, function (err) {
    //     console.log("NSF ERROR");
    //     submitSearch();
    // });

    microsoftSearch(name, aff, function(data) {
    request({
        method: "POST",
        uri: window.location.href + "/update/microsoft",
        json: {
            "data": data,
            "search": {"name": name, "affiliation": aff}
        }
    }, function (err, res, body) {
        console.log("Updated microsoft academics");

        submitSearch();
        })

    }, function (err) {
    submitSearch();
    console.log("Error from microsoft academics");
    });


    YoutubeSearch(name, aff, function(data) {
    request({
        method: "POST",
        uri: window.location.href + "/update/Youtube",
        json: {
            "data": data,
            "search": {"name": name, "affiliation": aff}
        }
    }, function (err, res, body) {
        console.log("Updated YoutubeSearch");

        submitSearch();
        })

    }, function (err) {
    submitSearch();
    console.log("Error from YoutubeSearch");
    });



    
};




var submitSearch = function() {
    finished += 1;
    
    if (finished == target) {
        console.log("hello from submit");
        document.getElementById("isSearch").value = true;
        document.getElementById("inputForm").submit();


    }
};

var refineButton = function() {
    event.preventDefault();
    document.getElementById("isSearch").value = true;
    document.getElementById("inputForm").submit();
};

document.getElementById('searchButton').addEventListener(
    'click', searchButton
);

document.getElementById('refineButton').addEventListener(
    'click', refineButton
)
