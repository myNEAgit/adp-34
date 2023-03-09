$(document).ready(function () {
    function t(t) {
        var a = e("industry", t);
        $("#value-added").text(a.valueAdded + "B"), 
        $("#avg-growth").text(a.avgGrowth), 
        $("#percent-industry").text(a.percentIndustry);
        $("#people-employed").text(a.thousands);
    }
    function e(t, e) {
        for (var a = JSON.parse(localStorage.getItem("dataGlobal")), r = 0; r < a.length; r++) if (a[r][t] === e) return a[r];
    }
    d3
        .csv("./res/data/data.csv")
        .row(function (t) {
            return {
                industry: t["Selected industries:"],
                valueAdded: t["Value added by arts and culture: 2021 (billions)"],
                avgGrowth: t["Percentage change (2020-2021)"],
                percentIndustry: t["Arts and cultural goods make up X percentage of your industry's total production"],
                thousands: t["thousands"],
            };
        })
        .get(function (t, e) {
            if (t) throw t;
            localStorage.setItem("dataGlobal", JSON.stringify(e));
        }),
        $("#industry-list a").click(function (e) {
            var a = $(this).attr("data-industry");
            $("#dropdownMenu1").html(a + ' <span class="caret"></span>'), $(".hide").removeClass("hide"), t(a);
        });
});
