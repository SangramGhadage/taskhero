import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


export default function Faq() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12} style={{ textAlign: 'start', margin: '2% 0 2% 3%' }}>
                        <h1
                            style={{
                                fontFamily: "Poppins",
                                fontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: '2rem',
                                overflow: 'hidden',
                                color: '#000000',
                            }}>
                            <span className={classes.span}>task</span>hero
                    </h1>
                    </Grid>
                    <Grid item xs={12} style={{ textAlign: 'start', margin: '0% 0 1% 3%' }}>
                        <h2
                            style={{
                                fontFamily: "Poppins",
                                fontStyle: 'normal',
                                fontSize: '1.7rem',
                                fontWeight: 700,
                                color: '#000000',
                            }}>
                            TaskHero Terms & Conditions
                    </h2>
                    </Grid>
                    <Grid item xs={12} style={{ textAlign: 'start', margin: '0% 0 2% 3%' }}>
                        <h3
                            style={{
                                fontFamily: "Poppins",
                                fontStyle: 'normal',
                                fontSize: '1rem',
                                fontWeight: 400,
                                color: '#000000',
                            }}>
                            Effective as of xx/xx/xxxx
                    </h3>
                    </Grid>
                </Grid>
                <div className={classes.root} style={{ height: '90vh' }}>
                    <Accordion className={classes.root}>
                        <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{ marginLeft: '2%' }}
                        >
                            <Typography>1. Introduction & Enrolment</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.root}>
                            <Typography style={{ marginLeft: '3%', textAlign: 'start' }}>
                                1. Introduction: <br />
                                &nbsp;&nbsp;  Thank you for visiting www.Taskheroes.com or the Task Hero mobile
                                application (together the "Task Hero”).
                                Task Hero is hereby referred to as "We", "Us", or “Our” where such
                                expression shall unless repugnant to the context thereof, be deemed to
                                include its respective legal heirs, representatives, administrators,
                                permitted successors and assigns.
                                By using the various services available on the Task Hero Platform
                                (“Services”), the User (jointly and severally referred to as “You”,
                                “Your”, “Member”, “Yourself”, “His/Her”, “Him/Her” or
                                “Users”) consent to these terms, guidelines and supplemental terms
                                provided to You for the Services that You use (collectively, “Terms”)
                                and Task Hero’s efforts to improve every User’s experience on the
                                platform. <br />
                                Please read these terms and conditions ("Terms and Conditions" or
                                "Agreement") carefully as they govern your use of (which includes
                                access to) the service provided by TaskHero through the Website or the
                                App (“Platform”, “Website”). <br />
                                Use of the Our Services may be subject to additional terms and
                                conditions presented by TaskHero, which are hereby incorporated by
                                this reference into these Terms. By signing up for, or otherwise using,
                                Our Services, You agree to these Terms. If you do not agree to these
                                Terms, then you must not use Our Service or access any of Our Content. <br />
                                We shall also notify Our registered members of material changes (if
                                any) to these terms and conditions by either sending a notice to the email
                                address provided to Us at the time of signing-up or by placing a pop-up
                                on our website/mobile application(s). Be sure to visit this page
                                periodically to review the most recent version of the Agreement. <br /> <br />
                                2. Membership: <br />
                                &nbsp;&nbsp; A. Invite based membership: Our membership runs on an invitationbased registration process for the Users. An existing user must refer
                                    a new user through invite and once the new User has provided the
                                    invite code and the code has been accepted as valid by Us, the User
                                    must submit certain requested information to Task Hero. <br />
                                    &nbsp;&nbsp; B. Signing up & Log in: The User can Sign up/Login by visiting
                                    www.taskheros.com or can download the Task Hero App. This App
                                    is currently available and can only be downloaded by visiting,
                                    www.taskheros.com for Android Users in APK format. <br />
                                    &nbsp;&nbsp; C. Adhering to the Terms of Use: The User must read and click on the
                                    checkbox to accept the prevailing Terms and Conditions (subject to
                                    changes) which the User needs to adhere to while availing Our
                                    services. <br />
                                    &nbsp;&nbsp; D. Pre-requisites to become a member: <br />
                                    &nbsp;&nbsp; &nbsp;&nbsp; i. You must register for the Service using accurate and current
                                    information about yourself - including your correct name,
                                    address and any other requested details. <br />
                                    &nbsp;&nbsp; &nbsp;&nbsp; ii. Ensure that the email address and mobile number we hold in
                                    Your name is kept up-to-date and that you have full access to
                                    it. We will be sending you important updates via Telegram. If
                                    you change your email address or mobile number for the
                                    account We hold in Your name, the same must be updated and
                                    changed accordingly. <br />
                                    &nbsp;&nbsp; Generation and collection of ‘Sensitive Personal Data or Information’
                                    is in accordance with Information Technology Act, 2000 as amended
                                    from time to time and allied rules requires the User’s express consent.
                                    By clicking on the “I agree with Terms and Policy” button at the time
                                    of registration, the User provides affirming assent to such information
                                    generation and collection as required under applicable laws
                                    Please be aware that a member of Task Hero is not allowed to run any
                                    paid ads on Google, Facebook or any other platform pointing to Task
                                    Hero. If the member does not comply with this, then it would result in
                                    immediate termination of His/Her account.


                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.root}>
                        <AccordionSummary
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            style={{ marginLeft: '2%' }}

                        >
                            <Typography>2. TaskHero Services & Rewards</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ marginLeft: '3%', textAlign: 'start' }}>
                                3. Our Service: <br />
                                &nbsp; A. We shall assign the registered Users with various tasks which needs
                                to be duly completed as per the requirements set forth by Task Hero.
                                The User may be asked to perform specific tasks such as, a) Buying
                                a product from a particular retailer, b) Reviewing the product
                                purchased or any other task updated by Us in the near future. Each
                                day, the User shall be assigned task(s) and the same shall be
                                communicated to them via App notification(s) or telegram. The
                                given task shall have an expiration time or date, set by Task Hero,
                                before which the User need to complete it. The User has the option
                                to decline the assigned task to them and on such denial, another task
                                shall be assigned to them. <br />
                                &nbsp; B. On successful completion of the task as per Task Hero requirements,
                                the User shall be duly rewarded for the no. of tasks completed by
                                them. Each task contains a different reward amount which shall be
                                modified or altered with time by Us. The Reward earned by the User
                                shall be duly credited to the Users Task Hero’s Account, which can
                                be transferred via Paytm into the User’s bank account. <br />
                                &nbsp; C. In case a User purchases a product from a particular retailer, as a task
                                set by Us, in order to qualify for Reward, the Retailer must confirm
                                that the Member's purchase is tracked, genuine and successful, after
                                which the Product/service is duly delivered, and the refund/return
                                period has also expired. The resulting Reward shall then be duly
                                credited to the User’s Account. <br />
                                In the event that the Retailers do not track a transaction using their
                                affiliate tracking system, then such purchase by the User shall not be
                                termed as a completed task and hence any due or expected Reward
                                from such Purchase will not be paid to the Member. <br /><br />
                                4. Reward and Referral Fees: <br />
                                &nbsp;Reward Mechanism <br />
                                A. Further, from time-to-time, We may increase or decrease the Reward paid
                                – in which case the Reward offer illustrated on our Platform may be
                                incorrect or outdated. By default, your completed task will be rewarded in
                                line with the reward rate set by Us at that moment, which may be more or
                                less than the prevailing rate. We shall not be liable for any difference in the
                                expected reward by the Member and the actual reward received by the
                                Member. <br />
                                B. After a Member successfully completes a designated task and once We
                                have verified the level of completion of the task to Our satisfaction, We
                                credit the Reward to the Member in their account. through his/her Reward
                                Receipt Method. <br />
                                C. When we have traced a task eligible for payment to Your Account, We will
                                credit your Account with a 'pending payment'. Once the task completion is
                                verified by Us, the payment will be marked as Approved– this can take upto 90 days or more from the date of submission of the task. If the task, in
                                the eyes of TaskHero, is incomplete or not completed by the User as per
                                the requirements or TaskHero is of the view that the User has completed
                                the task via unfair means, then the status of the reward payment shall not
                                be confirmed. <br />
                                D. Discretion of TaskHero: Whether a task is complete or not, shall be at the
                                sole discretion of Us and the Member understands and agrees to the same.
                                Further, We shall not be responsible in the event of non-traceability of a
                                completed task due to some technical or other errors to the Member, thus,
                                not qualifying the task as a Rewarding task for any reason whatsoever.
                                Whilst We will try and recuperate missing Rewards, at any point as well
                                as, We reserve the right not to chase missing Reward claims, particularly
                                where no task has been completed or the task has been left incomplete.
                                Further, in the event that, if the User feels that the task is complete as per
                                their satisfaction but is not finished in its entirety or for any reason
                                whatsoever as per Us, the Member will not illegible to receive any
                                Rewards. <br />
                                &nbsp;Reward Withdrawal <br />
                                A. While raising a request for pay-outs through Us, You shall provide the
                                correct and complete details of your bank account, UPI or any other
                                payment mode which You are fully entitled to use as a Reward Receipt
                                Method and also the User must keep all such credentials updated
                                through their Account. <br />
                                B. We reserve the right to discontinue or temporary put on hold any
                                payment methods listed on Our site, be it Paytm or any other payment
                                method which shall be introduced in the near future.
                                C. We shall not be held liable for any incorrect bank details provided by
                                the User through which the pay-out request has been initiated and if the
                                customer does provides incorrect details and we process the pay-out(s),
                                we shall not bear any liability against the same. Such, negligence shall
                                be seen as the User’s error. <br />
                                &nbsp;Reward not payable or forfeited <br />
                                There are various circumstances in which Rewards will not be payable to
                                the Member, and will be forfeited by us, these could be, without limitation: <br />
                                a. Where the User has returned/cancelled the product purchased in line of
                                the task assigned to them <br />
                                b. Where the User has reviewed the product in an inappropriate manner <br />
                                c. Where the Reward is attributed to a Member or Account that has been: <br />
                                &nbsp; i. suspended by Us under this Agreement or for any other reason;<br />
                                &nbsp; ii. associated with any fraudulent activity or any breach of this
                                Agreement <br />
                                &nbsp;Raising a ticket to track Reward <br />
                                A. When a Member sends us an enquiry on missing Reward via raising a
                                ticket, Our system would check if the User had completed the task as per
                                Task Hero requirements. If no such task is completed, then the Member
                                will be indicated that they did not complete the task to the satisfaction of
                                Task Hero. All tasks assigned are saved in Our database for cross reference
                                on adding Reward values. We do allow you to raise a query with Us. <br />
                                B. We reserve the right to reclaim or make balance adjustments accordingly
                                where it has been established that any credit has been applied in error. This
                                can include tasks which are already marked as payable or validated in Your
                                Account, or for tasks which have already been paid over to you via Paytm
                                or any other payment modes as We may introduce from time to time. In all
                                such incidences, Task Hero has the right to recover all unduly paid
                                Rewards which the member is not entitled to earn, through legal
                                proceedings. <br />
                                Our help pages provide further information about these circumstances. <br /> <br />
                                5. Operation of our Reward Service: <br />
                                A. We reserve the right to withdraw, modify or suspend aspects of the
                                Reward Service, or the entirety of it, where we have legal, security,
                                technical or commercial reasons to do so. <br />
                                B. We will endeavour to give You 30 (Thirty) days advance notice
                                before taking such action, except where it is necessary to take earlier
                                action for security reasons or because of technical difficulties which
                                would otherwise adversely affect Our service. <br />
                                C. There may also be times when the Reward Service becomes
                                inaccessible as a result of technical difficulties experienced by Us or
                                on the Internet; We will, however, use reasonable skill and care to
                                overcome these difficulties where they are within Our control. Please
                                note, however, that We cannot guarantee continuous access to the
                                Reward Services or any of the content that appears on Our portal.
                                Nevertheless, We shall inform the Users about service unavailability,
                                system maintenance or server down on our Portal and shall keep such situations
                                to arise to the bare minimum.

                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.root}>
                        <AccordionSummary
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            style={{ marginLeft: '2%' }}
                        >
                            <Typography>3. Register Account & Role Of TaskHero</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ marginLeft: '3%', textAlign: 'start' }}>
                                6. Your Account: <br />
                                A. The User can withdraw the Reward amount credited in their TaskHero
                                Account after the reward has been confirmed by TaskHero. <br />
                                B. You can withdraw your validated Rewards with the amount confirmed in
                                your TaskHero account. <br />
                                C. In the event the Member decides to close the Account with Us, and if at
                                such time of closure, the validated Rewards are still available in Your
                                account, such reward shall be forfeited. <br />
                                D. If the validated Reward in Your account is touching or is more than the
                                minimum threshold limit set for Your account, then you can request
                                payment of the same via Paytm or any other payment method which shall
                                be introduced in the near future. <br />
                                E. We have the discretion to forfeit any such validated balance showing on
                                your Account for the reasons provided elsewhere in this Agreement. <br />
                                F. You are responsible for all activity that happens on or through Your
                                account. The User must keep their password secure. We shall not be held
                                liable for any loss or damage from your failure to maintain the security of
                                Your Account. <br />
                                G. In the event the Member decides to close the Account with us and wants to
                                no longer be associated with Our Portal, the User must send an Email on
                                ____________, regarding the same. <br />
                                H. For security or other reasons, We may require You to change or update
                                password or other information which facilitates access to the Service;
                                however, We will never ask You for Your password via email, telephone,
                                or any other means other than through the Platform. You are solely
                                responsible for maintaining the confidentiality of your password and any
                                additional identifying information. <br /><br />
                                7. Our Role: <br />
                                A. The registered Users shall be assigned various tasks communicated via
                                Telegram or App notifications, which are to be completed as per the
                                requirements set forth by Us. Some of the tasks which the User needs to
                                complete are: <br />
                                &nbsp; i. Buying a product from a particular retailer <br />
                                &nbsp; ii. Reviewing the product purchased
                                or any other task updated by Us in the near future. The User shall be eligible
                                to complete a limited no. of tasks in a day and each task shall contain an
                                expiration date or time.
                                B. Accordingly, we have no control over or responsibility for:
                                i. the quality, safety, or legality of those products purchased from the
                                selected Retailers by the User as part of the task assigned; or
                                ii. the User initiating a pay-out request to an incorrect Paytm contact
                                no. <br />
                                iii. The user assuming the task assigned to them is complete, to the
                                contrary the task remains unfinished as per the set standards of Task
                                Hero. <br />
                                The Users shall exercise a reasonable amount of caution in finishing off
                                the task assigned to them by Task Hero. The User must adhere to the
                                standards set by Us, which shall allow the Users to earn successful
                                rewards without any delay or confusion
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.root}>
                        <AccordionSummary
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            style={{ marginLeft: '2%' }}
                        >
                            <Typography>4. Misuse & Additional Services</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ marginLeft: '3%', textAlign: 'start' }}>
                                8. Misuse: <br />
                                A. We reserve the right to suspend or terminate any Members access to
                                Our service, or parts of it, if in our reasonable view the said Member
                                or Account appears to be in breach of terms (including any
                                additional terms and conditions incorporated herein) of this
                                Agreement. <br />
                                B. We reserve the right to investigate complaints or reported violations
                                of this Agreement and to take any action we deem appropriate,
                                including but not limited to reporting any suspected unlawful
                                activity to law enforcement officials, regulators, or other third
                                parties and disclosing any information necessary or appropriate to
                                such persons or entities relating to your Account, email addresses,
                                usage history, posted materials, IP addresses and traffic information. <br />
                                C. Any Member, who in the sole discretion of Us, has committed any
                                kind of fraud or has misused Our Platform or our Reward Services,
                                their Account will be terminated with immediate effect and the
                                registered, Email and IP address will also be blacklisted thereby
                                discontinuing the Member to use or register with the same
                                credentials or IP address in the near future. <br />
                                D. We reserve the right to forfeit any pending payments or validated
                                payments from the Member's Account in case of such misuse of our
                                service by the Member. <br />
                                E. The User must not: <br />
                                &nbsp; i. Enter into, or attempt to enter into, any transaction to gain
                                Rewards by providing personal information of someone else. <br />
                                &nbsp; ii. Use payment method which they are not entitled to use. <br />
                                &nbsp; iii. Assume that the task assigned to them is complete and
                                expecting Rewards out of incomplete task. <br />
                                &nbsp; iv. Complete the task assigned by way of shortcuts or finding
                                loopholes and not following the prescribed manner. <br />
                                &nbsp; v. Indulge themselves in malpractices and illegal ways to finish
                                the task assigned. <br />
                                &nbsp; vi. Review any product of services rendered by any retailer in a
                                defamatory, offensive, abusive or indecent manner. <br />
                                &nbsp; vii. Post any material <br />
                                &nbsp; • Which is likely to cause needless annoyance,
                                inconvenience or distress to any person <br />
                                &nbsp; • Which contain any computer virus, macro virus, Trojan
                                horse, worm, or anything else designed to interfere with,
                                interrupt, or disrupt the normal operating procedures of a
                                computer or to surreptitiously intercept, access without
                                authority, or expropriate any system, data or personal
                                information <br />
                                &nbsp; • Which contravene the Applicable Law or regulation
                                (including, but not limited to, laws governing consumer
                                protection, distance selling, unfair competition, antidiscrimination, false advertising, information technology,
                                copyright, trademark and privacy); <br />
                                &nbsp; • Which breaches the rights of any person or entity (including
                                any rights or expectations of privacy) <br />
                                F. If You see or experience anything on Our Platform that appears to
                                infringe any of the above requirements, We would like You to
                                inform Us by using Our contact form. <br />
                                G. Each Member acknowledges that we are entitled, but not obliged, to
                                withdraw any material, which appears - based on information
                                received from third parties or other Members - to be in breach of this
                                Agreement. <br /> <br />
                                9. Additional services: <br />
                                We may offer new or additional services through this Platform from time
                                to time. Your use of those services may be subject to additional terms and
                                conditions, which You must comply with. Provided that those terms are
                                notified to You on the Platform in an appropriate manner (as determined
                                by Us in our reasonable discretion) when You agree to take those services,
                                any failure by You to comply with a material provision of the terms
                                governing those services will amount to a breach of this Agreement.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.root}>
                        <AccordionSummary
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            style={{ marginLeft: '2%' }}
                        >
                            <Typography>5. Problem, Resolution, Communication</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ marginLeft: '3%', textAlign: 'start' }}>
                                10. Governing Law: <br />
                                This Agreement, and Our relationship with You and each Member, is
                                governed as per the Indian Laws. TaskHero and You, each submit to
                                the non-exclusive jurisdiction of the Indian courts in relation to disputes
                                arising in connection with this Agreement. Further, TaskHero and You
                                agree to resolve any dispute, claim, or controversy that relates to or
                                arises in connection with these Terms or TaskHero Services, via
                                Arbitration in accordance with the provisions of The Indian Arbitration
                                & Conciliation Act, 1996, including any amendments thereof. The place
                                of Arbitration shall be Haryana and Arbitration proceedings shall be
                                conducted in English Language. The arbitral award passed shall be final
                                and binding on the parties. <br /><br />
                                11. Indemnity: <br />
                                You agree to indemnify and hold Us harmless against all damages,
                                liabilities, claims and expenses of any kind, that may arise out of or in
                                connection with (a) any breach of this Agreement by You or through
                                Your Account, or (b) any task assigned by Task Hero. <br /><br />
                                12. Warranty Disclaimer: <br />
                                A. The content and material from or through the Platform are provided
                                "as-is," "as available," with "all faults", and all warranties, express
                                or implied, are disclaimed (including but not limited to the
                                disclaimer of any implied warranties of merchantability, non-infringement, freedom from error, and fitness for a particular
                                purpose). <br />
                                B. TaskHero doesn’t warrant that the service provided by Us or the
                                content accessible to the User is free from malware or other type of
                                bugs, problems, errors. <br />
                                C. In addition, TaskHero makes no representation regarding, nor does
                                it warrant or assume any responsibility for, any third-party
                                applications (or the content thereof), user content, devices or any
                                product or service advertised, promoted or offered by a third party
                                on or through the TaskHero service or any hyperlinked website, and
                                TaskHero is not responsible for any transactions between you and
                                any third-party providers of the foregoing. <br />
                                D. No advice or information whether oral or in writing obtained by you
                                from Us shall create any warranty on behalf of TaskHero.
                                This section applies to the fullest extent permitted by applicable law. <br /><br />
                                13. Limitation of Liability: <br />
                                A. You agree that your sole and exclusive remedy for any problems or
                                dissatisfaction with the TaskHero service is to uninstall any
                                TaskHero software running on any OS or to stop using the TaskHero
                                services. You agree that TaskHero has no obligation or liability
                                arising from or related to third-party applications or the content
                                thereof made available through or in connection with the TaskHero
                                service, and while your relationship with such third-party
                                applications may be governed by separate agreements with such
                                third parties, your sole and exclusive remedy, as with respect to
                                TaskHero, for any problems or dissatisfaction with any third-party
                                applications or the content thereof, is to uninstall or stop using such
                                third-party applications. <br />
                                B. In no event will TaskHero, its officers, shareholders, employees,
                                agents, directors, subsidiaries, affiliates, successors, suppliers, or
                                licensors be liable for: <br />
                                &nbsp; i. any indirect, special, incidental, punitive or consequential
                                damages <br />
                                &nbsp; ii. any damages for loss of profit, data or business (whether direct
                                or indirect) savings, litigation, whether based on breach of
                                contract, breach of warranty, tort (including negligence),
                                product liability or otherwise, even if advised of the possibility
                                of such damages. <br />
                                &nbsp; iii. The aggregate liability of Task Hero and the affiliated parties
                                in connection with any claim arising out of or relating to the
                                Platform and/or the products, information, documents and
                                services provided herein or hereby shall not exceed Rs 500 and
                                that amount shall be in lieu of all other remedies which You
                                may have against Us and any affiliated party to Us. <br />
                                &nbsp; iv. Any material contributed by Members, tasks assigned by Us or
                                any activity or communication relating to such material or task <br />
                                &nbsp; v. (A) any loss of revenue, business, anticipated savings or profits;
                                (B)any errors in or omissions from the Platform or any services
                                or products obtainable therefrom; (C) the unavailability or
                                interruption of the Platform or any features thereof; (D) your
                                use of the Platform; (E) the content and materials contained on
                                the Platform; (F) or any delay or failure in performance beyond
                                Our control or any of Our affiliated parties. <br />
                                C. We shall be liable for direct loss or damage only, whether in contract,
                                tort (including negligence, breach of statutory duty or other tort) or
                                otherwise, and whether caused by its act or omission or that of its
                                employees, agents or subcontractors. <br />
                                D. We shall be liable as expressly provided in this Agreement, but shall
                                have no other obligation, duty or liability whatsoever in contract, tort
                                (including negligence, breach of statutory duty and any other tort) or
                                otherwise. <br />
                                E. We warrant that the Reward Service will be provided with
                                reasonable care and skill with the intention of meeting Our
                                specifications for the Reward Service, but We cannot and do not
                                guarantee that the Reward Service will meet your requirements.
                                The provisions of this Clause shall survive the termination or expiry of this
                                Agreement. <br /><br />
                                14. Third Party Content: <br />
                                Third party content and materials may appear on Our Platform or may be
                                accessible via hyperlinks from the Platform. We are not responsible for and
                                assume no liability whatsoever for any mistakes, misstatements of law,
                                defamation, omissions, falsehood, obscenity, pornography or profanity in
                                the statements, opinions, representations or any other form of content and
                                materials appearing on the Platform or accessible via hyperlinks from the
                                Platform. <br /><br />
                                15. Contact from third parties: <br />
                                If anyone contacts Us in relation to material or Tasks assigned to You or
                                your Account, then you agree:
                                b. to provide all reasonable information and assistance as required by Us
                                in connection with responding to that contact; and
                                c. to respond promptly and accurately to it, should We pass the message
                                to You for a response. <br /><br />
                                16. Communications: <br />
                                You hereby expressly agree to receive communications by way of
                                Telegram, mobile app or any other medium introduced from time to time
                                from Task Hero relating to Services provided through the Website.
                                The User shall have the option to chat with the TaskHero Representative
                                in the App, in case the User faces any problem.

                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.root}>
                        <AccordionSummary
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            style={{ marginLeft: '2%' }}
                        >
                            <Typography>6. General Clauses</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ marginLeft: '3%', textAlign: 'start' }}>
                                17. Intellectual Property: <br />
                                You acknowledge that all copyright, trademarks, and other intellectual
                                property rights in and relating to the Platform (including the material which
                                is contributed by Members or Retailers) are owned by, or licensed to, Us.
                                Copying material from Our portal may seem easy but is illegal and strict
                                actions would be taken against the User/visitor under applicable laws.
                                Therefore, no-one may copy, distribute, show in public or create any
                                derivative work from the Platform, or any of the material which is found
                                on the Platform unless properly licensed to do so by Us.
                                By uploading or including any material on the Platform, a Member
                                expressly grants:
                                a.to Us a non-exclusive license (including the right to grant sub-licenses)
                                to use, reproduce and distribute that material through our Reward
                                Service and any other interactive services through which we or Our
                                sub-licensee make the Reward Service (or a service based on Our
                                service) available; and
                                b.to other Members (through Us, under the license referred to above), the
                                non-exclusive, personal, non-transferable right to view the relevant
                                material. <br /><br />
                                18. Privacy Policy:
                                Our Privacy Policy forms part of this Agreement, and by entering into
                                this Agreement, You also give Your consent to the way We handle
                                Your personal data under that policy. Given the global nature of the
                                World Wide Web, please note that a posting on the Platform may be
                                accessible to internet users around the world. <br /><br />
                                19. Assignment:
                                We reserve the right to assign this Agreement, and to assign or subcontract
                                any or all of Our rights and obligations under this Agreement but will not
                                do so in such a way as to reduce any guarantees You are given under this
                                Agreement. You may not without Our written consent assign or dispose of
                                this Agreement, nor subcontract any of your rights and obligations under
                                it. <br /><br />
                                20. Entire Agreement:
                                This Agreement is intended to contain Your entire agreement with Us
                                relating to the Reward Service; we believe it to be fair and reasonable. It
                                replaces all earlier Agreements and understandings with You relating to
                                the Reward Service, except for any fraud or fraudulent representation by
                                either of Us. <br /><br />
                                21. Changes to this Agreement:
                                We reserve the right to make changes to these terms (including any
                                additional TaskHero terms and conditions incorporated by reference
                                herein) from time to time by notifying you of such changes by any
                                reasonable means, including by posting the revised Terms on the
                                applicable TaskHero Service (provided that, for material changes, we will
                                seek to supplement such notice via email, in-service pop-up message or
                                other prominent notice within the Service, or any other means). Any such
                                changes will not apply to any dispute between you and us arising prior to
                                the date on which the Terms were changed. Your use of Our Services
                                following any changes to these Terms, will constitute your acceptance of
                                such changes. If you do not wish to continue using the Services rendered
                                by Us under the updated Terms, you may terminate your account by
                                contacting us via the contact information furnished below. The effective
                                date set forth at the top of this document indicates when these Terms were
                                last changed. <br /><br />
                                22. Severability:
                                In the event that any term of this Agreement is held to be invalid or
                                unenforceable, the remainder of this Agreement shall remain valid and
                                enforceable. You and Tash Hero are independent contractors, and no
                                agency, partnership, joint venture or employee-employer relationship is
                                intended or created by this Agreement. Our failure to act with respect to a
                                breach by You or others does not waive Our right to act with respect to
                                subsequent or similar breaches. <br /><br />
                                23. Keeping this Agreement:
                                We don't separately file the individual Agreements entered into by the
                                Users when they register for the Reward Services. You can access it at
                                www.taskhero.com. Please make a durable copy of this Agreement by
                                printing and/or saving a downloaded copy on your own computer. It is
                                offered in English only.
                        </Typography>
                        </AccordionDetails>
                    </Accordion >
                    <Accordion className={classes.root}>
                        <AccordionSummary
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            style={{ marginLeft: '2%' }}
                        >
                            <Typography>7. Customer Support</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ marginLeft: '3%', textAlign:'start' }}>
                                24. Contact:
                                If you have questions relating to your account, reward(s), payment(s) or
                                Taskhero services or its terms (including any additional TaskHero terms
                                and conditions incorporated herein), You can reach out to us on
                                '__________'.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </>
    )
}

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#ffedcc',
        fontFamily: ['Poppins', 'Sans-Serif']
    },
    span: {
        fontWeight: 700
    },
}))