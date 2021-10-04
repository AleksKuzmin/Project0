let $checkingAccount = 0;
let $savingsAccount = 0;

function reflectAccounts() {
  $('#checking-balance').text(`$${$checkingAccount}`);
  $('#savings-balance').text(`$${$savingsAccount}`);
  if($checkingAccount > 0) {
    $('#checking-balance').removeClass('zero')
  } else {
    $('#checking-balance').addClass('zero')
  }
  if($savingsAccount > 0) {
    $('#savings-balance').removeClass('zero')
  } else {
    $('#savings-balance').addClass('zero')
  }

}

$(document).ready(function() {

  reflectAccounts();

  $('#checking-deposit').on("click", function () {
    // $deposit = $('#checking-amount').val()
    // $balance= $('#checking-balance').text(Number($deposit) + Number($('#checking-balance').text()))
    $deposit = Number($('#checking-amount').val())
    if ($deposit > 0) {
      $checkingAccount += $deposit
      reflectAccounts();
    }
    // if($checkingAccount >0 || $balance+$deposit >0) {
    //   $('#checking-balance').removeClass('zero');
    // }
  });


///checking withdraw



$('#checking-withdraw').on("click", function () {
  $withdraw = Number($('#checking-amount').val())
  //$balance = $('#checking-balance').text()
  if ($checkingAccount >= $withdraw ) {
    $checkingAccount -= $withdraw
  } else if ($checkingAccount + $savingsAccount >= $withdraw) {
    $savingsAccount -= $withdraw - $checkingAccount
    $checkingAccount = 0
  }

  reflectAccounts();


    // if($checkingAccount <= 0) {
    //   $('#checking-balance').addClass('zero');
    //
    // }
    // if($checkingAccount >0) {
    //   $('#checking-balance').removeClass('zero');
    // }
    // if($checkingAccount < $withdraw) {
    //    $withdraw=0;
    // }




  // $('#checking-balance').text(Number($balance)- Number($withdraw))


});

///savings-deposit
    $('#savings-deposit').on("click", function () {
      $deposit = Number($('#savings-amount').val())
      if ($deposit > 0) {
        $savingsAccount += $deposit
        reflectAccounts();
      }

  });

      $('#savings-withdraw').on('click', function() {
        $withdraw = Number($('#savings-amount').val())
        //$balance = $('#checking-balance').text()
        if ($savingsAccount >= $withdraw ) {
          $savingsAccount -= $withdraw
        } else if ($checkingAccount + $savingsAccount >= $withdraw) {
          $checkingAccount -= $withdraw - $savingsAccount
          $savingsAccount = 0
        }

        reflectAccounts();

    });

});
///Savings
