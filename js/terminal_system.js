function terminal_check(ele) {
    if(event.key === 'Enter') {

        function get_args(text) {//Get args from command
            return String(text).toLowerCase().split(" ").slice(1)
        }

        function print(text) {
            output.innerHTML = text;
        }

        function command(com_fire) {
            return String(ele.value).toLowerCase().startsWith(com_fire);
        }
        
        function change_page_title(text) {
            document.getElementById("pgtitle").innerHTML = "D3adC0re OS - T3rm1nal - "+String(text).toLowerCase();

        }
        
        function change_window_title(text) {
            document.getElementById("topbar_window_terminal").innerHTML = "T3rm1nal - "+String(text).toLowerCase();
        }
        
        //List of commands
        const commands = {
            'help': 'return list of commands!',
            'whoami': "print effective user name",
            "rm -rf /*": "remove all files and directories",
            "ls": "list directory contents",
            "sudo": "execute a command as superuser",
            "math": "calculate expressions",
            "neofetch": "system info",
            "clear": "clear cmd",
            "exit": "close terminal",
            "user": "change user",
            "skibididop": "u know it",
            "justice": "open Just Ice app",
            "settings": "open system preferences",
            "changelog": "print all changes for last version"
        
        };
        //Define output tag
        output = document.getElementById("terminal_output")
   
        //Help command that return list with commands
        if (command("help")) {
            var help_text = [];
            for(var key in commands) {
                var value = commands[key];
                help_text.push(key+" - "+commands[key]);
            }

            print(help_text.join('</br>'))
        }
        //Easter egg command
        else if (command("d3adc0re")) {
            print("hi, <a style='color: white;' target='_blank' href='https://t.me/d3adc0re'>d3adc0re</a>");
        }

        else if (command("whoami")) {
            print("us3r");
        }

        else if (command("neofetch")) {
            print('<img style="width: 32rem; margin-top: 1rem; user-select: none; -webkit-user-select: none; -webkit-user-drag: none; -moz-user-drag: none;pointer-events:none;" src="images/neofetch.png">')
        }

        else if (command("rm -rf /*")) {
            //Disable css
            for ( i=0; i<document.styleSheets.length; i++) {
                void(document.styleSheets.item(i).disabled=true);                           
            }

            //Wait 1 sec
            setTimeout(function () {}, 1000);

            //Make page hidden
            document.getElementById("body").style.display = "none";
            
            //Add cookie
            document.cookie = "kernel_panic=1";
            
            //Redirect to kernel_panic page
            window.location.replace("desktop/wjigemk_kernel_panic.html");//redirect to kernel panic page
        }

        else if (command("ls")) {
            //Static folders to display
            var folders = ["Documents", "Music", "Public", "Templates","Desktop", "Downloads", "Pictures", "Videos"];
            //Print all folders
            print(folders.join(' '));
        }
        
        else if (command("math")) {
            //Get args by input
            args = get_args(ele.value)

            if (args.length == 0) {
                print('Enter an number 1!');
                return null;
            }

            else if (args.length == 1) {
                print("Enter an operator!");
                return null;
            }
            
            //if number 2 is nothing aka "== None"
            if (args[2] == undefined) {
                print("Enter an number 2!");
                return null;
            }

            //Get number 1
            num1 = args[0]

            //Get operator
            operator = args[1]
            
            //Get number 2
            num2 = args[2]

            //Output with calculated expression
            print(num1+' '+operator+' '+num2+" = "+eval(num1+operator+num2))
        }

        else if (command("exit")) {
            close_window_terminal()
            print('');
        }

        else if (command("justice")) {
            setTimeout(() => {  open_window_justice(); }, 1500);
            print('Successfully launched "Just Ice" app.');
            ele.value = '';
        }

        else if (command("skibididop")) {
            print('<img style="width: 31.8rem; margin-top: 0.5rem;height: 20.4rem; border-radius: 10px; user-select: none; -webkit-user-select: none; -webkit-user-drag: none; -moz-user-drag: none;pointer-events:none;" src="images/skibidi-bop-bop-yes-yes.gif">')
        }

        else if (command('settings')) {
            setTimeout(() => {  open_window_settings(); }, 500);
            print('Successfully launched system preferences.');
            ele.value = '';
        }

        else if (command("changelog")) {
            print_changelog = [];
            for(var key in changelog) {
                var value = changelog[key];
                print_changelog.push("["+value+"] "+key)
            }

            print(print_changelog.join("\n"))

            
        }

        //If input empty
        else if (command('clear')) {
            print('');
        }

        //If input empty
        else if (command(' ')) {
            print('');
        }
        
        else {
            print('Command: "'+ele.value+'" not found!<br>Enter "help" for list of commands!');
        }

        
        change_page_title(String(ele.value).toLowerCase())

        change_window_title(String(ele.value).toLowerCase())

        //Remove text from input
        ele.value = "";
    }
}