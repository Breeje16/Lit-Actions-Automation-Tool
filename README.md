
# Lit Actions Automation Tool (Still Under Development)

It will be Completed by End of Next week.

About Project: It is an event listening solution for Lit Actions. This will allow developers to write Actions that are executed when a specified on (or off) chain event occurs.


## How to Use this Tool?

[![Lit-Action-Automation-Tool-drawio-1.png](https://i.postimg.cc/MH7XXx0w/Lit-Action-Automation-Tool-drawio-1.png)](https://postimg.cc/hQGK3k3Z)

By Leveraging PKP (Programable Key Pairs), Lit Action gets the capabilities of signing and decrypting.

About PKP: PKP is like a Cloud Wallet where all Key Pairs are generated collectively by the Lit Nodes through a process called Distributed Key Generation (DKG). This process permits the Lit Nodes to generate a new public/private keypair where nobody knows the whole private key. Each node has a share of a private key, and they can do everything with it that they could do with a traditional private key, like sign and decrypt data. Signing with a private key share produces a signature share.

It's Advantage is that User now no Longer needs to "Trigger" any Lit Actions. Instead this Project uses Event Based Automation which can have so many Usecases.

[![Lit-Action-Automation-Tool-drawio-2.png](https://i.postimg.cc/SN0Y71j3/Lit-Action-Automation-Tool-drawio-2.png)](https://postimg.cc/F1ZKhZyV)

STEP 1: Here the Developer will have to Define the Trigger Type which Determines which type of event the action will be listening to.

STEP 2: Next, Developer will have to add a Code which will run whenever a "Trigger" Condition is Met.

STEP 3: Now, Developer will have to set the Condition when the Trigger should happen.

STEP 4: Last Step will be the Optional step where Developer can get some type of Notification regarding Failure in Execution.



## Common Usecases of this Tool

- Building a serverless backend that handles dApp users' input.

- Sending a transaction to the chain from a Web3 Action itself.

- Sending the data about a transaction to other (Web2 or Web3) services via HTTP.

- Sending Reminders for Voting in a DAO proposal on Discord.



