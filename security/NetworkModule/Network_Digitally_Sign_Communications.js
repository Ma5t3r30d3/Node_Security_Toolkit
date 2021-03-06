
        const powershell = require('node-powershell');
        const fs = require('fs');
        const os = require('os');
        let Network_Digitally_Sign_Communications = (LootDir) => {
            let ps = new powershell({
                // verbose:true,
                executionPolicy: 'Bypass',
                noProfile: true
            });
            // ps.on('end', code => {console.log("Shell closed")});
            
            ps.addCommand(`reg add "HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\LanmanWorkstation\\Parameters" /v RequireSecuritySignature  /t REG_DWORD /d 1 /f`)
            ps.invoke().then(output => {
                // console.log(output);
                console.log(`Set the SMB client for only communicating with an SMB server that performs SMB packet signing`);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
    
            }).catch(err => {
                console.log(err);
                ps.dispose().then(code => {}).catch(error => {}) //console.log("Closed Shell")});
            })
        }
        module.exports = Network_Digitally_Sign_Communications
        