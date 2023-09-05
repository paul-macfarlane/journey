const { JSDOM } = require("jsdom");

const html = `
<tw-passagedata pid="1" name="Moments of Peace in Honduras" tags="" position="357,117" size="100,100">You and your family live in Honduras. Every day, you look forward to gathering around the table to share breakfast together. It is one of your favorite moments of peace. You and your husband have two children, a girl and a boy, who you love very much. A few weeks ago, you found out you had a third child on the way. Each evening, after the children come home from school, your husband joins the neighborhood watch team. There have been rumors of gang activity close by, and he wants to play his role in keeping your spot of peace safe. You are nervous for his safety, but you know that you cannot stop him from going, so you pray that he will be okay. Plus, his father and brother are part of the neighborhood watch as well, so you tell yourself that it will all be okay. (click-goto:?page,&quot;Violence Breeds&quot;)


&lt;style&gt; img {
	max-width:100%;
	max-height:100%;
}

&lt;/style&gt;
&lt;img
src=https://media.istockphoto.com/id/1141609779/photo/santa-lucia-honduras.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=X_404IdTHIZE75KTrZipmIDdWoLGiDSlZo4i1CKRQwA=&gt;
&lt;/div&gt;
</tw-passagedata><tw-passagedata pid="2" name="Violence Breeds" tags="" position="468,119" size="100,100">Then one day, things take a turn for the worse. Your husband comes home bloody and bruised. He said that they had been threatened by the gang, and that he&#39;s not sure how much longer the neighborhood will be safe. Your family&#39;s safety comes above everything else, but you are not ready to leave your home. 
What do you do?
[[Stay-&gt;Things Intensify]]
[[Leave-&gt;A Remote Village]]</tw-passagedata><tw-passagedata pid="3" name="Things Intensify" tags="" position="672,46" size="100,100">You decide to stay in your home and wait it out. But the threats of violence get more and more real. The gang burns one of the homes in your neighborhood to the ground to send a message.
What do you do?
[[Stay-&gt;Things Intensify 3]]
[[Leave-&gt;A Remote Village]]</tw-passagedata><tw-passagedata pid="4" name="Things Intensify 3" tags="" position="829,50" size="100,100">The next week, your husband&#39;s brother is killed on his way to work. 
You and your husband begin to fight every night about whether or not you should leave. He tells you that he is next. You don&#39;t want to believe him. You have no idea what leaving your home would mean for your family. And, you don&#39;t know how practical it is to travel while pregnant. You have started to have morning sickness regularly, are incredibly tired, and your baby bump has started to show. 
What do you do?
* [[Stay-&gt;Things Intensify 4]]
* [[Leave-&gt;A Remote Village]]</tw-passagedata><tw-passagedata pid="5" name="Things Intensify 4" tags="" position="988,46" size="100,100">One night, your husband&#39;s warnings come true. While you are all eating dinner, members of the gang come into your house. They throw you to the ground, beat you, and stamp on your belly. They stab your husband and beat him with baseball bats. Luckily, your son and daughter manage to hide in their room and get away unscathed. 
The next day, you visit a doctor who patches up your husband, and tells you that you have lost your baby. You cry uncontrollably for hours on end. 
What do you do, now? 
[[Leave-&gt;Baby again!]]</tw-passagedata><tw-passagedata pid="6" name="A Remote Village" tags="" position="698,262" size="100,100">You and your family leave your beloved home with few possessions (phone, photos, some old jewelry), taking a bus to the western part of Honduras, and then begin walking for a few hours. Eventually, you find a very run-down, remote village. You stop and ask a local if there is a possibility that you and your family could live there, explaining the situation that you have been thrown into. She points you to an old, abandoned house, and tells you that you could stay there while you figure things out.
What do you do?
[[Settle for the house-&gt;A Few Weeks Pass By]]
[[Keep moving-&gt;Head to the US Together]]</tw-passagedata><tw-passagedata pid="7" name="A Few Weeks Pass By" tags="" position="862,255" size="100,100">A few weeks pass by, and you and your family have settled into your new home. The structure is old and rickety, but you are thankful to be safe again. Your children start to attend the local schools, but your husband is struggling to find work. Each day, he goes out into the town looking for any business that needs an extra worker, but he always comes back dejected and disappointed. He tells you that he heard there is better opportunity in the United States, and that because you have experienced violence, that you could seek asylum there. He wants to go to America, the land of opportunity. But you just found a new peace, and you are not ready to let go. 
What do you do?
[[Stay-&gt;Weeks Turn to Months]]
[[Let your husband go to find work, and join him when he&#39;s settled-&gt;Head to the US Separately]]
[[Leave together for the U.S.-&gt;Head to the US Together]]</tw-passagedata><tw-passagedata pid="8" name="Weeks Turn to Months" tags="" position="1008,246" size="100,100">A few months pass by, and your kids start to make friends at school. Your husband finds a job as a dish-washer downtown. He is not making a lot of money, but it is enough for food, and that is really all you need. You also start to have morning sickness again, and after another pregnancy test, confirm you are expecting. You are thankful that God has given you another child, and you are happy to be at peace for the time being. However, your husband keeps insisting that you should try and move to America. There would be better schools there for your kids, he says. And better jobs there. He says that there, you would never have to live in an old, rickety home like this one. Though the black mold on the bathroom ceiling has started to bother you, you still don&#39;t want to go. 
What do you do?
[[Stay-&gt;The Car]]
[[Let your husband go to find work, and join him when he&#39;s settled-&gt;Head to the US Separately]]
[[Leave together for the U.S. -&gt;Head to the US Together]]</tw-passagedata><tw-passagedata pid="9" name="The Car" tags="" position="1163,261" size="100,100">One day, while you at your old, rickety home, you see an expensive, slick-looking car drive through your village. You are confused. It&#39;s been months since you&#39;ve seen a vehichle like that. 
A few hours later, your neighbor comes knocking on your door. She tells you that she was out in her yard when the car stopped her. It was filled with big, tall men, she said. And then she said something that made your heart stop: They asked for your husband. 
When your husband comes home, you tell him what happened. He says that he has made up his mind, and that he and your son will leave for the US the next morning. You want to go with him, but you are worried about traveling while pregnant. 
What do you do?
[[Go with your husband-&gt;Head to the US Together]]
[[Stay at home &amp; join him after you&#39;ve given birth-&gt;Head to the US Separately]]</tw-passagedata><tw-passagedata pid="10" name="Head to the US Together" tags="" position="816,441" size="100,100">Together, the four (soon to be five) of you decide to leave for America. Yet, you have to decide how you will make your way to the U.S./Mexican border. Your husband wants to pay a //coyote//, but you don&#39;t have enough money to pay him. They could cost up to 2,000 pesos, but your husband says that he can make a deal with the coyote if you cannot pay right away. You have heard stories of people who are taken advantage of by coyotes and end up killed. You&#39;ve also heard that there are freight trains that go to the U.S. that you could hop aboard, but you are not sure how safe it would be to ride on top of a fast-moving train for days at a time. Of course, you could always walk and hitch-hike, but you are not sure how practical that is with your pregnancy. 
What do you do?
[[Use a coyote-&gt;Coyote]]
[[Hop on a freight train-&gt;Freight Train]]
[[Walk/Hitch-hike-&gt;Walk &amp; Hitch Hike]]</tw-passagedata><tw-passagedata pid="11" name="Head to the US Separately" tags="" position="987,443" size="100,100">The next morning, your husband says that he will take all of the cash he has earned to pay for a //coyote// to take him and your son to the U.S. It might not be enough, but he says that the coyote he knows is willing to make a deal with him.
Nervous for the dangers of his travels, you beg him not to go. He tells you that he doesn&#39;t want to leave you either, but if he doesn&#39;t go now, then you all could end up dead. Though it pains you, you know he is right.
You bid him fairwell, promising that you, your daughter, and the new baby will join them in a few months. (click-goto:?page,&quot;Baby is Born&quot;)</tw-passagedata><tw-passagedata pid="12" name="Baby is Born" tags="" position="1107,443" size="100,100">A few months later, you give birth to a beautiful baby boy. Your daughter helps care for you during the first few weeks after you&#39;ve given birth. The last months have been really hard on you both. You ran out of money, and have been relying on your neighbors to bring you food. Your daughter has missed a lot of school. 
When you recover, you have to decide how to get to the U.S. You could take a coyote, but you don&#39;t have any money to pay him. You&#39;ve also heard that there are freight trains that go to the U.S. that you could hop aboard, but you are not sure how safe it would be to ride on top of a fast-moving train with a little baby. Of course, you could always walk and hitch-hike, but you are not sure how practical that is. 
What do you do?
[[Stay and try to earn money to use a coyote-&gt;Stay &amp; Earn]]
[[Hop on a freight train-&gt;Freight Train 2]]
[[Walk &amp; hitch-hike-&gt;Walk &amp; Hitch Hike 2]]</tw-passagedata><tw-passagedata pid="13" name="Coyote" tags="" position="468,521" size="100,100">You&#39;ve decided to pay a coyote. He demands every cent that you have in exchange for taking you to the U.S. He&#39;s also demanded all of your husband&#39;s earnings from his first year of work in the United States. If he fails to provide it to him, then he says he will find you and kill you.
You ride in a car with him for days, your children get antsy. Days turn to weeks. You hold your breath each time you pass a border check-point, but your coyote has connections with the agents at each border. They must get a cut of the pay. 
As you cross into Mexico, though, the people manning the border checkpoint keep staring at your husband through the window. They seem to recognize him. One of the agents opens the car door and points a gun to your husband&#39;s head. He threatens to kill all of you, but your husband begs for mercy, saying that he will come with them if they let you go. 
You scream and cry, but it&#39;s no use. Before you know it, he is dragged out of the car, and the coyote is driving away. Just like that, he&#39;s gone.
Finally, you make it to Juarez, Mexico, just outside of the US border. Your coyote drops you off at the bridge leading to the U.S., and says that he cannot take you any further. There are new regulations, he says. You&#39;ll have to do the rest on your own.(click-goto:?page,&quot;Pre-Seeking Asylum Together&quot;)


&lt;style&gt; img {
	max-width:100%;
	max-height:100%;
}

&lt;/style&gt;
&lt;img
src=https://www.migrationpolicy.org/sites/default/files/source_images/Source-Smugglers-2020.jpg&gt;
&lt;/div&gt;
</tw-passagedata><tw-passagedata pid="14" name="Freight Train" tags="" position="628,541" size="100,100">You and your family have decided to hop aboard a moving freight train. When you arrive at the tracks, you wait for a few hours for the train to arrive. When it finally comes, it is moving quickly. You have to get a running start to jump on board. Your daughter does not get proper footing when she jumps onto the train, and she almost falls off, but your husband pushes her up in the nick of time. He loses his footing in the process, though, and gets caught on the tracks just as the train is passing. You scream for him, but it&#39;s too late. He is gone.
You and your children spend the next few hours in absolute agony, wondering if your husband is still alive or if the unthinkable happened. Your children beg to get down and go back and look, but you have to keep going.
Eventually, your family settles on top of one of the cars with other migrants, and you remain like that for a few weeks, enduring the full force of the weather around you. You are scared to move around too much because you do not want to fall. You did not pack enough food to last you the journey, and you feel the pain of hunger in your stomach growing. Your children cry frequently. You feel your tears coming too, but you try and hold them in.
Finally, you arrive in Juarez, Mexico, and you and your family jump off the moving train.(click-goto:?page,&quot;Pre-Seeking Asylum Together&quot;)


&lt;style&gt; img {
	max-width:100%;
	max-height:100%;
}

&lt;/style&gt;
&lt;img
src=https://ca-times.brightspotcdn.com/dims4/default/3a041b1/2147483647/strip/true/crop/2048x1365+0+0/resize/1200x800!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F38%2F76%2F7f1e95275f49a248281927d189e2%2Fla-1559418296-e1jtz6qrhv-snap-image&gt;
&lt;/div&gt;
</tw-passagedata><tw-passagedata pid="15" name="Walk &amp; Hitch Hike" tags="" position="763,570" size="100,100">You and your family walk and hitch-hike your way to the border, spending many of your nights under trees or in abandoned buildings if you&#39;re lucky enough to find one. 
You find other people who are walking towards the border, too, and together you form a clan of sorts to help eachother out.
On your final stretch, though, the heat of the desert becomes unbarable. You quickly run out of water, though no amount seems like it&#39;s ever enough. You trudge along for what seems like hours, only to find yourself back at what seems like the same place you started. You hold your children&#39;s hands tight. One more step. One more step. 
Eventually, though, you all grow so tired that you have to sit down. You tell yourself that you&#39;ll all nap for a little bit and then keep going when you wake up. After an hour or so, you wake up to your children screaming. &quot;Daddy&#39;s not breathing! Daddy&#39;s not breathing!&quot; You shake and shake and shake him, but he does not move. He is heavy and his skin is so hot that it burns to the touch. You have to keep moving. You take your kids and go, trying not to cry as you leave.
In total, it takes almost a full year to get to Juarez, and when you finally reach the city, you are astounded that you even made it. Your children have lost their father, and halted their education for your journey, and you&#39;re hoping that once you get to the United States, you can finally focus on providing them with a good future.
(click-goto:?page,&quot;Pre-Seeking Asylum Together&quot;)


&lt;style&gt; img {
	max-width:100%;
	max-height:100%;
}

&lt;/style&gt;
&lt;img
src=https://media.cnn.com/api/v1/images/stellar/prod/181027215155-02-migrant-caravan-stories.jpg?q=x_88,y_0,h_1080,w_1440,c_crop&gt;
&lt;/div&gt;
</tw-passagedata><tw-passagedata pid="16" name="Camp Outside the Bridge" tags="" position="852,773" size="100,100">You and your family try to make the most of homeless-life outside of the bridge. Food is scarce, and the harsh heat of the desert makes living in your make-shift tent unbarable. 
At night, gruff men always pass through, and you begin to get worried that one of them will take advantage of you or your daughter. The other migrants camping out tell you that it&#39;s risky to stay here. They say that some of their friends have been kidnapped and forced to sell drugs. 
You&#39;re tired of waiting. You want to go to the U.S., to finally have a peaceful, stable life again.
What do you do?
[[Cross the Border Illegally-&gt;Cross the Border Illegally]]
[[Find Shelter Elsewhere-&gt;Find Shelter Elsewhere]]


&lt;style&gt; img {
	max-width:100%;
	max-height:100%;
}

&lt;/style&gt;
&lt;img
src=https://npr.brightspotcdn.com/dims4/default/51f9a3f/2147483647/strip/true/crop/4032x2268+0+378/resize/1200x675!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fkera%2Ffiles%2F201911%2FIMG_1321.jpeg&gt;
&lt;/div&gt;
</tw-passagedata><tw-passagedata pid="17" name="Find Shelter Elsewhere" tags="" position="1125,769" size="100,100">The other migrants tell you that there is a large camp where you can stay until your court case is processed. You make your way there with your family, and when you arrive, you are given two beds. You settle in, making your new space a home with the few posessions you still have with you. You wish that you had something to remind you of home. 
After a few days, you begin to understand what life at the camp is like. There is very little privacy. Nothing is sanitary. Your son grows extremely ill, and there is no doctor to bring him too. You begin to get worried that staying here will only make everything worse. 
What do you do?
[[Stay-&gt;Purgatory 1]]
[[Cross the Border Illegally-&gt;Cross the Border Illegally]]



&lt;style&gt; img {
	max-width:100%;
	max-height:100%;
}

&lt;/style&gt;
&lt;img
src=https://www.gannett-cdn.com/presto/2019/12/03/PPHXS/ee230bf8-240b-4a79-9d86-c2ebf07cb67d-50bbc677871c03d298bdc889db46c7e0a1961c0c.jpg?crop=5471,3078,x0,y278&amp;width=3200&amp;height=1801&amp;format=pjpg&amp;auto=webp&gt;
&lt;/div&gt;
</tw-passagedata><tw-passagedata pid="18" name="Seeking Asylum Together" tags="" position="638,682" size="100,100">You are told that in order to enter the US, you have to plant both feet on US soil at the port of entry on the bridge, and ask for asylum. The ICE officials will have to process your case if you do this. 
But, when you get to the port of entry, there are ICE officials lined up all the way across the bridge (a practice called //meetering//). They do not let you plant both your feet on American soil, so you cannot ask to seek asylum legally. 
They say that they have too many pending cases, and that instead of going through the asylum process that would permit you to wait in the US, they will take your name down, and add it to a list. They tell you to check back at the bridge everyday at 4am, and when it&#39;s your turn, they will process your case.
What do you do?
[[Camp outside the port of entry to wait for your court date-&gt;Camp Outside the Bridge]]
[[Find shelter elsewhere-&gt;Find Shelter Elsewhere]]



&lt;style&gt; img {
	max-width:100%;
	max-height:100%;
}

&lt;/style&gt;
&lt;img
src=https://www.gannett-cdn.com/presto/2018/10/30/PTX1/0171b416-c19a-4583-b412-13753c6fefb5-2_Bridge_Migrants.jpg?crop=4187,2400,x0,y479&amp;width=3200&amp;height=1835&amp;format=pjpg&amp;auto=webp&gt;
&lt;/div&gt;
</tw-passagedata><tw-passagedata pid="19" name="Seeking Asylum Separately" tags="" position="1317,671" size="100,100">Your husband calls you and tells you that he&#39;s made it with the coyote to the United States. They traveled to Kansas, where he has settled into a run-down apartment, will wait for you there. You tell him that you have just reached Juarez, and that you cannot wait to join him soon. 
However, when you go to the port of entry to seek asylum, the ICE officials tell you that there is a new policy in place called the Migrant Protection Program (MPP). Because you are seeking asylum from Honduras, and not Mexico, you must wait on the Mexican side of the border for your court date to be processed. You don&#39;t know anybody in Juarez, and have no place to stay.
What do you do?
* [[Camp outside the port of entry to wait for your court date-&gt;Camp Outside the Bridge]]
* [[Find shelter elsewhere-&gt;Find Shelter Elsewhere]]



&lt;style&gt; img {
	max-width:100%;
	max-height:100%;
}

&lt;/style&gt;
&lt;img
src=https://www.gannett-cdn.com/presto/2019/09/19/PTX1/5be46951-3596-4450-924a-25892c2edb11-3_Mexican_Asylum_Seekers.JPG?crop=2699,1519,x0,y0&amp;width=2699&amp;height=1519&amp;format=pjpg&amp;auto=webp&gt;
&lt;/div&gt;
</tw-passagedata><tw-passagedata pid="20" name="Cross the Border Illegally" tags="" position="718,941" size="100,100">You&#39;ve decided to cross the border illegally. You weigh your options of how to do so, carefully. You don&#39;t want to get caught, because you heard that if you did, you would be put in detention and your children will be ripped away from you. 
You can climb the eight-foot border wall, and create a pulley system to get your kids across, but you are worried that you might not be agile enough. You can hike Mount Cristel Rey, which did not have a border wall, but you&#39;ve heard that many others have died of dehydration in the dry desert heat trying to make that journey. Or, you could cross El Rio Grande, but you and your kids cannot swim. 
What do you do?
* [[Climb the Wall-&gt;Wall]]
* [[Hike the Mountain-&gt;Mountain]]
* [[Cross the River-&gt;River]]</tw-passagedata><tw-passagedata pid="21" name="Purgatory 1" tags="" position="986,953" size="100,100">You decide to wait for your court case to be processed. This takes weeks, then months, then years. You start to work at a restaurant to earn some extra money. Your kids go to school at the camp, but they only have classes for up to fifth grade. You&#39;re growing tired of life in Juarez. There is no privacy, and the poverty around you makes you feel sick. 
What do you do?
* [[Continue to Wait-&gt;Purgatory 2]]
* [[Cross the Border Illegally-&gt;Cross the Border Illegally]]


&lt;style&gt; img {
	max-width:100%;
	max-height:100%;
}

&lt;/style&gt;
&lt;img
src=https://www.gannett-cdn.com/presto/2019/12/16/PTX1/bf9012a8-cc59-4f4e-b368-3ec126c5a370-2_Escuelita_Chamizal.JPG?width=660&amp;height=371&amp;fit=crop&amp;format=pjpg&amp;auto=webp&gt;
&lt;/div&gt;
</tw-passagedata><tw-passagedata pid="22" name="Purgatory 2" tags="" position="1301,927" size="100,100">Your case begins to be processed, and you go to court many times, meeting the ICE officials at the bridge at 4am. Each time, they take you to a detention center, and stick you and your family in a //hielera// with other migrants. It is so cold that on one of these court dates, your son develops pneumonia. They strip you of your clothes and your belongings, making you wear these ugly, orange jumpsuits. They keep the lights on all day, with the TV loudly blaring something about the Migrant Protection Program over and over again. You have no idea how much time has passed, but at the end of it, they let you go with nothing but a new court date. You dread going through this process again and again. 
What do you do?
* [[Continue to Wait-&gt;Wait in Juarez]]
* [[Cross the Border Illegally-&gt;Cross the Border Illegally]]



&lt;style&gt; img {
	max-width:100%;
	max-height:100%;
}

&lt;/style&gt;
&lt;img
src=https://static01.nyt.com/images/2023/02/15/multimedia/00childlabor-border-klzc/00childlabor-border-klzc-superJumbo.jpg?quality=75&amp;auto=webp&gt;
&lt;/div&gt;
</tw-passagedata><tw-passagedata pid="23" name="Wall" tags="" position="566,1121" size="100,100">You climb the border wall, but when you get to the top, you lose balance, and fall eight feet to the other side. You are in agonizing pain. There is blood seeping through your pants. You are sure that your leg is broken, and you cannot move well, if at all. Luckily, your children manage to make their way across unharmed. 
What do you do?
* [[Wait for Help-&gt;Wait w/ Broken Leg]]
* [[Move Along-&gt;Trudge Along]]


&lt;style&gt; img {
	max-width:100%;
	max-height:100%;
}

&lt;/style&gt;
&lt;img
src=https://cloudfront-us-east-2.images.arcpublishing.com/reuters/UPVMX4XDBNKQPFNG2FRLSGBUAY.jpg&gt;
&lt;/div&gt;
</tw-passagedata><tw-passagedata pid="24" name="Mountain" tags="" position="749,1117" size="100,100">You hike Mount Cristel Rey, but just as you are making your way up the hill, a Customs and Border Patrol Car comes out of nowhere. They arrest you and your family and bring you to a detention center. They stick you and your family in a //hielera// with other migrants. It is so cold that your son falls sick. They strip you of your clothes and your belongings, making you wear these ugly, orange jumpsuits. They keep the lights on all day, and the TV blaring something about the Migrant Protection Program. They only bring you one meal a day. You have no idea how much time has passed.(click-goto:?page,&quot;Detention 1&quot;)


&lt;style&gt; img {
	max-width:100%;
	max-height:100%;
}

&lt;/style&gt;
&lt;img
src=https://cdn.kpbs.org/img/photos/2012/01/16/ALISA2.JPG&gt;
&lt;/div&gt;
</tw-passagedata><tw-passagedata pid="25" name="River" tags="" position="936,1127" size="100,100">You decide to try the river, but the strong current pushes you. You get stuck in the overpass of the canal, the water thrashing against your body. As you struggle to breathe, and your sight goes black, you hear the screams of your children. &quot;Mama! Mama!&quot;
Time of death: 4:23PM. 

&lt;style&gt; img {
	max-width:100%;
	max-height:100%;
}

&lt;/style&gt;
&lt;img
src=https://idsb.tmgrup.com.tr/ly/uploads/images/2021/02/10/thumbs/871x871/92209.jpg&gt;
&lt;/div&gt;
</tw-passagedata><tw-passagedata pid="26" name="Wait w/ Broken Leg" tags="" position="646,1266" size="100,100">You wait for help. Soon, a Customs and Border Patrol Car pulls up. They handcuff you and your family and bring you to the Emergency Room. In transport, though, you begin to lose sensation in your leg. There is so much blood seeping through your clothes, the sight of it makes you dizzy. You lose consiousness. 
Time of death: 3:22PM.

&lt;style&gt; img {
	max-width:100%;
	max-height:100%;
}

&lt;/style&gt;
&lt;img
src=https://idsb.tmgrup.com.tr/ly/uploads/images/2021/02/10/thumbs/871x871/92206.jpg&gt;
&lt;/div&gt;
</tw-passagedata><tw-passagedata pid="27" name="Trudge Along" tags="" position="513,1267" size="100,100">You trudge along with the help of your children, but as you are crossing the interstate highway, you are hit by a car.
Time of death: 6:00PM.</tw-passagedata><tw-passagedata pid="28" name="Wait in Juarez" tags="" position="1104,1124" size="100,100">You continue to wait in Juarez, but camp life starts to gnaw at you. Luckily, your friend tells you about an organization called Annunciation House. They will provide you with free, good quality shelter while you wait out your court process, they tell you. You find out more information and get in contact with the director of the program. Just like that, you&#39;re set to move in to a new house next week.
The longer you wait in the little home, the more tired you become. You miss home, and want your children to be able to get an education. The volunteers at the home are so kind, but your heart aches for stability. You miss your husband more with each passing day.
(click-goto:?page,&quot;Years go by&quot;)</tw-passagedata><tw-passagedata pid="29" name="Stay &amp; Earn" tags="" position="1192,580" size="100,100">You stay and earn money as a cook at the restaurant for a few months, saving enough to pay for a coyote. He demands every cent that you have in exchange for taking you to the U.S., but he also warns that he cannot promise you will make it there. 
You ride in a car with him for days, your children get antsy. Days turn to weeks. You hold your breath each time you pass a border check-point, but your coyote has connections with the agents at each border. They must get a cut of the pay. 
Finally, you make it to Juarez, Mexico, just outside of the US border. Your coyote drops you off at the bridge leading to the U.S., and says that he cannot take you any further. There are new regulations, he says. You&#39;ll have to do the rest on your own.(click-goto:?page,&quot;Seeking Asylum Separately&quot;)


&lt;style&gt; img {
	max-width:100%;
	max-height:100%;
}

&lt;/style&gt;
&lt;img
src=https://www.google.com/url?sa=i&amp;url=https%3A%2F%2Fwww.migrationpolicy.org%2Farticle%2Fally-or-exploiter-smuggler-migrant-relationship-complex-one&amp;psig=AOvVaw3UweWeGSY-MTeaZUSK8sTl&amp;ust=1684545335068000&amp;source=images&amp;cd=vfe&amp;ved=0CBAQjRxqFwoTCMC4qcSagP8CFQAAAAAdAAAAABAE&gt;
&lt;/div&gt;
</tw-passagedata><tw-passagedata pid="30" name="Freight Train 2" tags="" position="1332,525" size="100,100">You, your daughter, and your newborn baby have decided to hop aboard a moving freight train. When you arrive at the tracks, you wait for a few hours for the train to arrive. When it finally comes, it is moving quickly. You have to get a running start to jump on board. Your daughter does not get proper footing when she jumps onto the train, and she almost falls off, but you pull her up with all of your might. She sprains her ankle badly in the process and spends the next few hours in absolute agony. You wonder if it&#39;s broken. 
Your family settles on top of one of the cars with several other migrants, and you remain like that for a few weeks, enduring the full force of the weather around you. You are scared to move around too much because you do not want to fall. You did not pack enough food to last you the journey, and you feel the pain of hunger in your stomach growing over the last few days. 
Finally, you arrive in Juarez, Mexico, and you and your family dismount the moving train.(click-goto:?page,&quot;Seeking Asylum Separately&quot;)

&lt;style&gt; img {
	max-width:100%;
	max-height:100%;
}

&lt;/style&gt;
&lt;img
src=https://ca-times.brightspotcdn.com/dims4/default/3a041b1/2147483647/strip/true/crop/2048x1365+0+0/resize/1200x800!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F38%2F76%2F7f1e95275f49a248281927d189e2%2Fla-1559418296-e1jtz6qrhv-snap-image&gt;
&lt;/div&gt;
</tw-passagedata><tw-passagedata pid="31" name="Walk &amp; Hitch Hike 2" tags="" position="1455,511" size="100,100">You, your daughter, and your newborn baby walk and hitch-hike your way to the border, spending many of your nights under trees or in abandoned buildings if you&#39;re lucky enough to find them. You go several days without food, and after a few weeks, you find that you are unable to breastfeed your son. The journey is extremely difficult with a newborn, and he looks severely malnourished with each passing day. It takes almost a full year to get to Juarez, but when you finally do, you count your blessings. Your daughter has halted her education for your journey, and you&#39;re hoping that once you get to the United States, she can finally focus on her future.(click-goto:?page,&quot;Seeking Asylum Separately&quot;)

&lt;style&gt; img {
	max-width:100%;
	max-height:100%;
}

&lt;/style&gt;
&lt;img
src=https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2020_40/3416970/201003-honduran-migrants-honduras-mn-0920.JPG&gt;
&lt;/div&gt;
</tw-passagedata><tw-passagedata pid="32" name="Detention" tags="" position="1102,1357.3333333333333" size="100,100">After months in detention, one of the ICE officials makes an announcement. They&#39;ve run out of space in the detention center, and they will be releasing all of the migrants to a place called Annunciation House. They pile you and your family along with several others into a large bus, and drop you off at a house. When you enter, you are welcomed with open arms, given food, clothing, medical attention, and shelter for as long as you need it. You thank God for the good fortune that you&#39;ve come into. 
(click-goto:?page,&quot;You&#39;ve Made it to the US!&quot;)


&lt;style&gt; img {
	max-width:100%;
	max-height:100%;
}

&lt;/style&gt;
&lt;img
src=https://media.cnn.com/api/v1/images/stellar/prod/180417150822-stweart-detention-center-lumkin-ga-restricted.jpg?q=w_2160,h_2880,x_1080,y_0,c_crop&gt;
&lt;/div&gt;
</tw-passagedata><tw-passagedata pid="33" name="You&#39;ve Made it to the US!" tags="" position="830,1462" size="100,100">Congratulations! By the luck of God, you&#39;ve made it inside the U.S, either by waiting out the legal process, crossing the border illegally, or evading detention by ICE.
Of course, most of the conflict that your character is enduring has yet to be resolved. Now it&#39;s time for reflection and discussion. 
During our next case, we will discuss the challenges of seeking healthcare once a migrant has made it into the United States.</tw-passagedata><tw-passagedata pid="34" name="Pre-Seeking Asylum Together" tags="" position="311,602" size="100,100">When you make it to the border, your pregnancy becomes your number 1 concern. Now that you&#39;re on your own with two kids, you need a place where you can safely deliver your child. 
There is a hospital nearby, but you&#39;ve heard stories about them reporting migrants to the Mexican government or to cartels for money. 
You also can&#39;t help but think that if your baby is born in the U.S., then he will be a citizen, which would mean greater hope and opportunity for all of you.
What do you do?
[[Go to the Hospital in Juarez to Deliver Your Baby-&gt;The Baby! Hospital]]
[[Deliver Your Baby on the Street-&gt;The Baby! Street]]
[[Seek Asylum Before delivering the Baby-&gt;The Baby! ICE]]</tw-passagedata><tw-passagedata pid="35" name="The Baby! Hospital" tags="" position="10,584" size="100,100">You arrive at the hospital shortly after you start having contractions. The wait times are long, and the whole building is crowded. You keep your daughter and son close to you, and are fearful for your safety in a completely new place. 
Eventually, though, you are seen and your baby is safely delivered by one of the emergency room physicians. 
When you&#39;re finally holding your new son in your hands, everything changes. You are happy that he is here, and you see your husband in his eyes and his smile. It&#39;s almost like he is right there with you. (click-goto:?page,&quot;The Baby! Hospital - Ctd.&quot;)</tw-passagedata><tw-passagedata pid="36" name="The Baby! Street" tags="" position="376,738" size="100,100">As you wander around the city of Juarez, you meet many other migrants, who tell you they are all &quot;waiting in line&quot; to cross the border. You&#39;re not exactly sure what that means, but you ask them if there&#39;s a safe place where you can deliver your child. 
You feel that the baby is coming any day now.
Luckily, one of the migrants trying to seek asylum in the United States was a doctor back in his homeland of El Salvador. He tells you that he knows how to deliver babies, and that if you camp out on the street next to the border for a few days, he can take care of you.(click-goto:?page,&quot;Baby! - Street Ctd.&quot;)


&lt;style&gt; img {
	max-width:100%;
	max-height:100%;
}

&lt;/style&gt;
&lt;img
src=https://www.gannett-cdn.com/presto/2019/09/19/PTX1/5be46951-3596-4450-924a-25892c2edb11-3_Mexican_Asylum_Seekers.JPG?crop=2699,1519,x0,y0&amp;width=660&amp;height=372&amp;format=pjpg&amp;auto=webp&gt;
&lt;/div&gt;
</tw-passagedata><tw-passagedata pid="37" name="The Baby! ICE" tags="" position="213,836" size="100,100">When you get to the port of entry, the ICE officials say that they have too many pending cases, and that instead of going through the asylum process that would permit you to wait in the US, they will take your name down, and add it to a list. They tell you to check back at the bridge everyday at 4am, and when it&#39;s your turn, they will process your case. But, they don&#39;t know how long that will take.
You know that your baby will be delivered anyday now, and cannot afford for your case to take time to process before you deliver your new child.
What do you do?
* [[Deliver Your Baby on the Street-&gt;The Baby! Street]]
* [[Cross the Border Illegally-&gt;Cross the Border Illegally]]</tw-passagedata><tw-passagedata pid="38" name="Baby! - Street Ctd." tags="" position="481,738" size="100,100">The other migrants at the border help set up a &quot;shelter&quot; for you and your children out of pieces of trash that you find on the street. 
It&#39;s not the best hut you&#39;ve ever lived in, but you&#39;re stripped for options, and you and your children can squeeze into it comfortably enough. 
You spend two nights there, and barely sleep. You&#39;re worried that your children will get kidnapped or hurt in the middle of the night, and turn your head at every sound. 
The only thing that&#39;s really scarce is water. You feel dehydrated constantly, and the heat does not help.
Finally, your water breaks. The doctor from El Salvador helps deliver your baby, and when he is finally born, you feel a new sense of hope holding him. You see your husband&#39;s features in his face, and find a new strength to keep moving. 
After a few days of rest, you are ready to try and enter the US.(click-goto:?page,&quot;Seeking Asylum Together&quot;)



&lt;style&gt; img {
	max-width:100%;
	max-height:100%;
}

&lt;/style&gt;
&lt;img
src=https://www.aclu.org/wp-content/uploads/2020/03/Asylum-MPP-Social-Image.jpg&gt;
&lt;/div&gt;
</tw-passagedata><tw-passagedata pid="39" name="The Baby! Hospital - Ctd." tags="" position="14,704" size="100,100">The next day, as you are resting and awaiting your discharge, a few men in green suits come into your room. 
They say they are from &quot;La Guarda National&quot; of Mexico, and that the hospital was required to report you and your children as illegal entrants into the country. 
They demand a bribe to keep quiet about your presence in the country, but you don&#39;t have any money.  They say that&#39;s okay, and that they&#39;ll take your phone as a bribe, or that you could cut a deal with them and put your son to work for a few days. 
Horrified, you hold your son close to you.
What do you do?
[[Give up your phone-&gt;Phone]]
[[Give up your son-&gt;Nope]]</tw-passagedata><tw-passagedata pid="40" name="Phone" tags="" position="156,710" size="100,100">La Guarda Nacional settles for your phone, and leave you and your children alone. Finally, you are ready to cross the border.(click-goto:?page,&quot;Seeking Asylum Together&quot;)</tw-passagedata><tw-passagedata pid="41" name="Nope" tags="" position="81,851" size="100,100">You let your son go with the men from the Mexican National Guard. You never see him again.</tw-passagedata><tw-passagedata pid="42" name="Preface" tags="" position="245,118" size="100,100">Welcome. This is an activity meant to cultivate empathy for the situations that our patients may endure as they seek to cross the U.S./Mexican Border. As you work your way through this exercise, there will be parts of the story that may be triggering. Please take the time to care for your own mental and emotional health as needed, and step away when you need to. We will reflect on this exercise together as a group. 

Your GOAL as you put yourself in the character&#39;s shoes, is to cross the border. 

The PURPOSE of this exercise for us as healthcare providers is to understand that coming here, no matter what route our patients may take, is often not a choice.(click-goto:?page,&quot;Moments of Peace in Honduras&quot;)</tw-passagedata><tw-passagedata pid="43" name="Years go by" tags="" position="1100,1244" size="100,100">Two full years go by, and your time in Juarez feels more and more like purgatory. The day of the U.S. Presidential election, the volunteers in the house tell you that the outcome could determine the fate of the Migrant Protection Program. 
You jump with joy when a different Presidential candidate is elected. Maybe you could make it to the United States after all. Two months later, MPP is lifted, and you cross the border into the United States.(click-goto:?page,&quot;You&#39;ve Made it to the US!&quot;)


&lt;style&gt; img {
	max-width:100%;
	max-height:100%;
}

&lt;/style&gt;
&lt;img
src=https://sienaamcvoices.files.wordpress.com/2021/01/screen-shot-2021-01-21-at-4.42.47-pm.png?w=730&amp;h=730&amp;crop=1&gt;
&lt;/div&gt;
</tw-passagedata><tw-passagedata pid="44" name="Baby again!" tags="" position="1134,58" size="100,100">After a week of recovery, you and your family leave your beloved home with few possessions (phone, photos, some old jewelry), taking a bus to the western part of Honduras, and then begin walking for a few hours.
Eventually, you find a very run-down, remote village. You stop and ask a local if there is a possibility that you and your family could live there, explaining the situation that you have been thrown into. She points you to an old, abandoned house, and tells you that you could stay there while you figure things out.
What do you do?
[[Settle for the house-&gt;Weeks Turn to Months]]
[[Sleep in the street-&gt;Street Sleep]]</tw-passagedata><tw-passagedata pid="45" name="Street Sleep" tags="" position="1359,272" size="100,100">After few days pass of homelessness, your kids start to become sick. Your husband finds a job as a dish-washer downtown. He is not making a lot of money, but it is enough for food, and that is really all you need. You also start to have morning sickness again, and after another pregnancy test, confirm you are expecting. You are thankful that God has given you another child, and you are happy to be at peace for the time being. However the toll of homelessness is insurmountable. 
Your husband keeps insisting that you should try and move to America. There would be good schools there for your kids, he says. And better jobs there. He says that there, you would never have to live on the street.
What do you do?
[[Occupy the abandoned house-&gt;The Car]]
[[Let your husband go to find work, and join him when he&#39;s settled-&gt;Head to the US Separately]]
[[Leave together for the U.S. -&gt;Head to the US Together]]</tw-passagedata><tw-passagedata pid="46" name="Detention 1" tags="" position="773.3333333333333,1257.5000000000002" size="100,100">After a few days in detention, you and your children are deported back to Honduras. 
Do you start your journey again?
[[Yes-&gt;Moments of Peace in Honduras]]
[[No-&gt;No]]</tw-passagedata><tw-passagedata pid="47" name="No" tags="" position="893.3333333333334,1255.8333333333335" size="100,100">You&#39;ve reached the end of this module. Now, it is time to reflect and discuss together.</tw-passagedata>
`;

const htmlDecoded = html.replace(/&lt;/g, "<").replace(/&gt;/g, ">");

const dom = new JSDOM(htmlDecoded);
const document = dom.window.document;

// Create a mapping of passage names to their pids
const nameToPidMapping = {};
Array.from(document.querySelectorAll("tw-passagedata")).forEach((passage) => {
  const pid = passage.getAttribute("pid");
  const name = passage.getAttribute("name");
  nameToPidMapping[name] = pid;
});

const passages = Array.from(document.querySelectorAll("tw-passagedata")).map(
  (passage) => {
    const pid = passage.getAttribute("pid");
    const name = passage.getAttribute("name");

    // Extract image links and remove <img> tags
    const images = [];
    Array.from(passage.querySelectorAll("img")).forEach((img) => {
      images.push(img.getAttribute("src"));
      img.remove();
    });

    // Remove <style> tags and its content
    Array.from(passage.querySelectorAll("style")).forEach((style) => {
      style.remove();
    });

    // Extract click-goto links
    let clickGoto = null;
    const clickGotoMatch = passage.textContent.match(
      /\(click-goto:.*?,"(.*?)"\)/,
    );
    if (clickGotoMatch) {
      clickGoto = {
        name: clickGotoMatch[1],
        pid: nameToPidMapping[clickGotoMatch[1]],
      };
      passage.textContent = passage.textContent
        .replace(clickGotoMatch[0], "")
        .trim();
    }

    // Now, get the cleaned text content
    let content = passage.textContent.trim();

    // Extract decision content before splitting paragraphs
    const decisions = [];
    const decisionsRaw = content.match(/\[\[.*?\]\]/g) || [];
    decisionsRaw.forEach((decisionRaw) => {
      const decisionContent = decisionRaw.slice(2, -2);
      const [text, decisionName] = decisionContent
        .split("->")
        .map((s) => s.trim());
      decisions.push({
        text: text,
        name: decisionName,
        pid: nameToPidMapping[decisionName],
      });
      content = content.replace(decisionRaw, "").trim();
    });

    // Split paragraphs on newlines
    const paragraphs = content
      .split("\n")
      .map((p) => p.trim())
      .filter((p) => p);

    return {
      id: pid,
      name: name,
      paragraphs: paragraphs,
      decisions: decisions,
      images: images,
      clickGoto: clickGoto,
    };
  },
);

console.log(JSON.stringify(passages, null, 4));
