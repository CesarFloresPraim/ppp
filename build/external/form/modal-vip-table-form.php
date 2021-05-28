<?php

	// youremail here
	$to = "youremail@gmail.com";
	$from = 'email';

	$name = 'name';
	$headers = "From: $from";
	$subject = "You have a message.";

	$fields = array();


	$fields{"typeofholiday"} = "Type Of Holiday";
	$fields{"name"} = "Your Name";
	$fields{"email"} = "Email address";
	$fields{"phone"} = "Phone number";
	$fields{"groupsize"} = "Group Size";
	$fields{"date"} = "Date";
	$fields{"eventtime"} = "Event time";
	$fields{"message"} = "Your Message";

	$body = "Here is what was sent VIP CLUBIO:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s:%s\n",$b,$_REQUEST[$a]); }

	$send = mail($to, $subject, $body, $headers, $message);

?>
