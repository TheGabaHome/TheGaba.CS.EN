// 복사버튼
function copyToClipboard(val) {
  var t = document.createElement('textarea')
  document.body.appendChild(t)
  t.value = val
  t.select()
  document.execCommand('copy')
  document.body.removeChild(t)
}
// 복사완료
$(document).ready(function () {
  $('button.copy').click(function () {
    $('div.done').animate(
      {
        opacity: '1',
      },
      500,
      function () {
        $('div.done').animate(
          {
            opacity: '0',
          },
          500,
        )
      },
    )
  })
})
// 검색
$(document).ready(function () {
  $('#search').on('keyup', function () {
    var value = $(this).val().toLowerCase()

    $('.box').filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    })
  })
})

// 카테고리 필터
$(document).ready(function () {
  $('button.all').click(function () {
    $('#wrap .box').filter('.all').css('display', 'block')
    $('#wrap .box').not('.all').css('display', 'none')
  })
  $('button.h').click(function () {
    $('#wrap .box').filter('.all').css('display', 'block')
    $('#wrap .box').not('.h').css('display', 'none')
  })
  $('button.e').click(function () {
    $('#wrap .box').filter('.all').css('display', 'block')
    $('#wrap .box').not('.e').css('display', 'none')
  })
  $('button.a').click(function () {
    $('#wrap .box').filter('.all').css('display', 'block')
    $('#wrap .box').not('.a').css('display', 'none')
  })
  $('button.d').click(function () {
    $('#wrap .box').filter('.all').css('display', 'block')
    $('#wrap .box').not('.d').css('display', 'none')
  })
  $('button.c').click(function () {
    $('#wrap .box').filter('.all').css('display', 'block')
    $('#wrap .box').not('.c').css('display', 'none')
  })
  $('button.g').click(function () {
    $('#wrap .box').filter('.all').css('display', 'block')
    $('#wrap .box').not('.g').css('display', 'none')
  })
  $('button.b').click(function () {
    $('#wrap .box').filter('.all').css('display', 'block')
    $('#wrap .box').not('.b').css('display', 'none')
  })
})
