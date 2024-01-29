<?php
  $json = file_get_contents('php://input');
  $data = json_decode($json, true);

  // Multiple recipients
  $to = 'info@bebrususlenis.lt';
  // $to = 'traliamakaboo@gmail.com';

  // Subject
  $subject = 'Bebrusų slėnis registracijos užklausa';
  if($data['name']) {
    $subject .= ' - '.$data['name'];
  }

  // Message
  $message = '
  <html>
  <body>
    <h2>Užklausa</h2>
    <p>Vardas: '.$data['name'].'</p>
    <p>Telefono numeris: '.$data['phone'].'</p>
    <p>El. paštas: '.$data['email'].'</p>
    <p>Pasirinkimas: '.$data['choice'].'</p>
    <p>Žinutė'.$data['message'].'</p>
  </body>
  </html>
  ';

  // To send HTML mail, the Content-type header must be set
  $headers[] = 'MIME-Version: 1.0';
  $headers[] = 'Content-type: text/html; charset=UTF-8';

  // Additional headers
  // $headers[] = 'To: užklausa <traliamakaboo@gmail.com>';
  $headers[] = 'From: '.$data['email'];

  // Mail it
  if(mail($to, $subject, $message, implode("\r\n", $headers))) {
    echo json_encode(['success' => true, 'failed' => false]);
  }
  else {
    echo json_encode(['success' => false, 'failed => true']);
  }
?>
