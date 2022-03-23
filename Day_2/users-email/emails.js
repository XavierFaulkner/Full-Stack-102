let appData = {
    accounts: [
        {
            name: "yahoo",
            email: "faulkner.x@yahoo.com",
            folders: {
                inbox: {
                    numOfEmails: 585,
                    emails: [
                        {
                            type: "focused",
                            subject: "Github",
                            from: "noreply@github.com",
                            to: ["Xavier J Faulkner"],
                            content: "This is the content of the email"
                        },
                        {
                            type: "focused",
                            subject: "Microsoft Viva",
                            from: "viva-noreply@microsoft.com",
                            to: ["Xavier J Faulkner"],
                            content: "This is the content of the email"
                        }
                    ]
                },
                drafts: {
                    numOfEmails: 22,
                    emails: [
                        {
                            status: "unsent",
                            subject: "draft email",
                            from: "faulkner.x@yahoo.com",
                            to: "reciever",
                            content: "content of draft"
                        }
                    ]
                },
                sent: {
                    emails: [
                        {
                            status: "sent",
                            subject: "sent email",
                            from: "faulkner.x@yahoo.com",
                            to: "reciever",
                            content: "content of email"
                        }
                    ]
                }
            }
        },
        {
            name: "gmail",
            email: "xjfaulkner@gmail.com",
            folders: {
                inbox: {
                    numOfEmails: 415,
                    emails: [
                        {
                            type: "focused",
                            subject: "Venmo",
                            from: "venmo@email.venmo.com",
                            to: ["xjfaulkner@gmail.com"],
                            content: "email content goes here"
                        }
                    ]
                },
                drafts: {
                    numOfEmails: 0,
                    emails: [
                        {
                            status: "unsent",
                            subject: "draft email",
                            from: "faulkner.x@yahoo.com",
                            to: "reciever",
                            content: "content of draft"
                        }
                    ]
                },
                sent: {
                    emails: [
                        {
                            status: "sent",
                            subject: "sent email",
                            from: "xjfaulkner@gmail.com",
                            to: "reciever",
                            content: "content of email"
                        }
                    ]
                }
            }
        }
    ]
}

console.log("List of inbox names: ");
for(let i = 0; i < appData.accounts.length; i++) {
    console.log(appData.accounts[i].name);
}

console.log("\nList of emails: ");
for(let i = 0; i < appData.accounts[0].folders.inbox.emails.length; i++) {
    console.log(appData.accounts[0].folders.inbox.emails[i]);
}

console.log("\nText of the second email in the list: ")
console.log(appData.accounts[0].folders.inbox.emails[1].content);

//marking a draft email as sent
console.log("\nMarking an email as sent");
console.log("email before: ");
console.log(appData.accounts[1].folders.drafts.emails[0]);
appData.accounts[1].folders.drafts.emails[0].status = "sent";
console.log("email after: ");
console.log(appData.accounts[1].folders.drafts.emails[0]);

//Adding a draft email to the drafts mailbox
console.log("\nAdding a draft email to the drafts mailbox");
console.log("drafts email list before: ");
for(let i = 0; i < appData.accounts[1].folders.drafts.emails.length; i++) {
    console.log(appData.accounts[1].folders.drafts.emails[i]);
}
appData.accounts[1].folders.drafts.emails.push(
    {
        status: "unsent",
        subject: "draft email",
        from: "xjfaulkner@gmail.com",
        to: "reciever",
        content: "content of draft"
    }
);
console.log("drafts email list after: ");
for(let i = 0; i < appData.accounts[1].folders.drafts.emails.length; i++) {
    console.log(appData.accounts[1].folders.drafts.emails[i]);
}