
function show(){
    if (document.getElementById('crimeType').value=='Other') {
        document.getElementById('others_text').classList.remove('d-none');
    }
    else{
        document.getElementById('others_text').classList.add('d-none');
    }
}

document.getElementById('evidenceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let evidenceId = document.getElementById('evidenceId').value;
    let crimeType = document.getElementById('crimeType').value;
    let crimeDescription = document.getElementById('crimeDescription').value;
    let evidenceDetails = document.getElementById('evidenceDetails').value;
    let crimeArea = document.getElementById('crimeArea').value;
    let witnesses = document.getElementById('witnesses').value;
    let evidenceFile = document.getElementById('uploadEvidence').files[0];

    if (evidenceFile) {
        let fileReader = new FileReader();
        fileReader.onload = function() {
            let fileHash = sha256(fileReader.result);  
            console.log('File Hash:', fileHash);
            
            console.log({
                evidenceId,
                crimeType,
                crimeDescription,
                evidenceDetails,
                crimeArea,
                witnesses,
                fileHash
            });

            alert("Evidence submitted successfully!");
        };
        fileReader.readAsArrayBuffer(evidenceFile);
    } else {
        alert("Please upload an evidence file.");
    }
});

function sha256(buffer) {
    return 'examplehash';
}