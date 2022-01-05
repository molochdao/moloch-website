# Proposal Types

### Introduction to Proposals

Proposals can be used for all types of decision-making in MolochDAO. Add/remove DAO members, allocate Shares and Loot, distribute funds, and even interact with other applications and communities.

#### Standard Proposal Types <a href="standard-proposal-types" id="standard-proposal-types"></a>

* **Funding** - Tributing Spoils or Requesting funds from the DAO to work on internal projects and improvements
* **Token** - Request to add support for a new ERC20 token
* **Trade** - Request the DAO to swap one asset for another within the Bank
* **GuildKick** - Request to forcibly remove a malicious member DAO through a vote
* **Minion** - A contract that allows execution of arbitrary calls i.e swapping assets in the DAO bank
* **Superfluid** - A Boost that enables your DAO to stream payments to member DAOs in MolochDAO (not yet available on ethereum mainnet)

#### Proposal Process <a href="proposal-process" id="proposal-process"></a>

To submit a proposal, navigate to [MolochDAO](https://app.daohaus.club/dao/0x1/0x519f9662798c2e07fbd5b30c1445602320c5cf5b) and select “View Proposals” followed by New Proposal.

Select the Proposal Type (described above) and fill in all fields. Here are some of the things you’ll want to keep in mind when filling out a proposal.

* **TITLE:** Enter a description of the proposal. Example: New Member - Jane Doe
* **DESCRIPTION:** Anything you believe is relevant to your proposal. The shorter the description the better, and the important piece here is the _WHAT_ you are asking for and _WHY_.
* **LINK:** Whatever information gives us the best context to review your proposal and make an informed decision.
* **APPLICANT** With respect to funding proposals, this is the recipient or sender address you would like to have funds sent to or from.
* **PAYMENT REQUESTED:** The number of Shares or amount of payment requested. Payment can be requested in any token held by the DAO, or in shares and loot.
* **+REQUEST SHARES:** Voting shares in the DAO. If it is a funding proposal, Members can request payment be made in shares up to x% of the total amount requested.
* **+REQUEST LOOT:** Non-voting shares in the DAO. This means you will have shares which can be raqequit but do not hold voting rights. Loot shares cost the same as regular shares.
* **GIVE TRIBUTE:** The amount of capital you are committing to deposit to the DAO bank. (Tribute is relevant to Membership and Funding Proposals).

#### Stages of a Proposal <a href="stages-of-a-proposal" id="stages-of-a-proposal"></a>

**1. Submit Proposal**

Anyone, **even non-members**, can submit proposals to the DAO.

**2. Sponsor Proposal**

After submitting a proposal, it will enter the **Unsponsored Proposals** section. This means someone with shares (which could be you) must Champion the proposal in order for it to be moved to voting.

_🔥Note: You can sponsor your own Proposal, but it is recommended that you have another member sponsor it so they can make sure you have filled out the proposal with the correct information and you get the result you intended for.🔥_

You must have 1 WETH (wrapped ETH) available in your wallet to deposit in order to sponsor a proposal. Your deposit will be returned to you after the proposal passes/fails. Only members can 'Sponsor' the proposal, sending it to the `Queue`.

**3. In Queue**

Once the proposal has been sponsored it will enter the **Queue**. The queue ensures proposals are funneled to voting in an orderly fashion. One proposal will go from the queue to the Voting Period once every two hours.

**4. Voting Period**

Once in the **Voting Period**, members can now vote on the proposal. Every proposal has **7 days in the voting period** where it must receive more Yes than No votes to pass.

**5. Grace Period**

Voting is over, and the Proposal is set to pass or fail depending on the votes cast during Voting. **Members who voted No, and have no other pending Yes votes, can ragequit during this period. **This period lasts a duration of 7 days.

**6. Ready for Processing**

Next, The proposal is sent to **Processing** in which the vote is time stamped on-chain. Anyone, even non-members are able to process proposals!

**7. Completed**

After being processed, the proposal is marked as **Completed**, and all shares, funds or outcomes are executed as specified in the proposal. All outcomes of a proposal that affect you can be viewed by clicking your Address (top right) and selecting **View Member Profile**.

Check [here](https://app.daohaus.club/dao/0x1/0x519f9662798c2e07fbd5b30c1445602320c5cf5b/settings) to see the voting parameters for MolochDAO.
