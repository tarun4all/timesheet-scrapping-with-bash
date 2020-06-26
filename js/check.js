var time = (new Date()).getHours();

if(time > 17 && time < 19) {
    chrome.storage.sync.get(['work'], async function(result) {
        if(!result.work) {
            var todaysWork = prompt("Please enter tasks you have done so far.", "e.g I worked on chrome extension");

            if(todaysWork) {
                try {
                    let response = await fetch('https://hooks.slack.com/services/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', {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json"
                        },
                        body: `{"text":"Tarun: Good morning all, Today I am working on ${todaysWork}"}`
                      });
                    
                      if(response.status == 200) {
                          alert("You slack status updated.")
                      }
                } catch(err) {
                    console.log(err);
                }

                chrome.storage.sync.set({work: todaysWork}, function() {
                    console.log('Value is set to ' + todaysWork);
                });
            }
        }
    });
}