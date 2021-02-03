function handleSubmit(event) {
    event.preventDefault()
    document.getElementById('results').innerHTML =
        'please wait...';

    // check what text was put into the form field
    let checkUrl = document.getElementById('url').value
    if (Client.checkForName(checkUrl)) {
        console.log("::: Form Submitted :::")

        fetch('http://localhost:8081/callApi?url=' + checkUrl)
            .then(res => res.json())
            .then(function (res) {
                document.getElementById('results').innerHTML =
                    'The analysis of the submitted url leads to the following conclusions: ' +
                    'with a confidence of ' + res.confidence + '% the text is ' + res.subjectivity + ' and ' + res.irony;
            })
    } else {
        alert("please check the entered url");
    }
}

export {handleSubmit}
