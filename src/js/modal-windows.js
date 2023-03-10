!function (e){ "function" != typeof e.matches && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || function (e) { for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0; o[n] && o[n] !== t;)++n; return Boolean(o[n]) }), "function" != typeof e.closest && (e.closest = function (e) { for (var t = this; t && 1 === t.nodeType;){ if (t.matches(e)) return t; t = t.parentNode } return null }) }(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function() {

   /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
   let modalButtons = document.querySelectorAll('.js-open-modal');
   let overlay = document.querySelector('.js-overlay-modal');
   let closeButtons = document.querySelectorAll('.js-modal-close');

   /* Перебираем массив кнопок */
   modalButtons.forEach(function(item){

      /* Назначаем каждой кнопке обработчик клика */
      item.addEventListener('click', function(e) {

         /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */
         e.preventDefault();

         /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
         let modalId = this.getAttribute('data-modal');
         let modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


         /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
         modalElem.classList.add('active');
         overlay.classList.add('active');
      }); // end click

   }); // end foreach


   closeButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         var parentModal = this.closest('.modal');

         parentModal.classList.remove('active');
         overlay.classList.remove('active');
      });

   }); // end foreach


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });




}); // end ready

// https://jqueryui.com/datepicker/#default

// book-table
$( function() {
    $( "#date-book-table" ).datepicker( $.datepicker.regional[ "uk" ] );
    $( "#locale" ).on( "change", function() {
      $( "#date-book-table" ).datepicker( "option",
        $.datepicker.regional[ $( this ).val() ] );
    });
});

// book-nomer
$( function() {
  let dateFormat = "dd.mm.yy",
    from = $( "#date-book-nomer-from" )
      .datepicker({
        defaultDate: "+1w",
        changeMonth: false,
        numberOfMonths: 1
      })
      .on( "change", function() {
        to.datepicker( "option", "minDate", getDate( this ) );
      }),
    to = $( "#date-book-nomer-to" ).datepicker({
      defaultDate: "+1w",
      changeMonth: false,
      numberOfMonths: 1
    })
    .on( "change", function() {
      from.datepicker( "option", "maxDate", getDate( this ) );
    });
  function getDate( element ) {
    var date;
    try {
      date = $.datepicker.parseDate( dateFormat, element.value );
    } catch( error ) {
      date = null;
    }
    return date;
  }
} );


/* Ukraine initialisation for the jQuery UI date picker plugin. */
(function (factory) {
   "use strict";

   if (typeof define === "function" && define.amd) {

      // AMD. Register as an anonymous module.
      define(["../widgets/datepicker"], factory);
   } else {

      // Browser globals
      factory(jQuery.datepicker);
   }
})(function (datepicker) {
"use strict";

datepicker.regional.uk = {
	closeText: "Закрити",
	prevText: "Минулий",
	nextText: "Наступний",
	currentText: "Сьогодня",
	monthNames: [ "січень", "лютий", "березень", "квітень", "травень", "червень",
		"липень", "серпень", "вересень", "жовтень", "листопад", "грудень" ],
	monthNamesShort: [ "січ.", "лют.", "бер.", "квіт.", "трав.", "черв.",
		"лип.", "серп.", "вер.", "жовт.", "лист.", "груд." ],
	dayNames: [ "неділя", "понеділок", "вівторок", "середа", "четверг", "п'ятниця", "субота" ],
	dayNamesShort: [ "нд.", "пн.", "вт.", "ср.", "чт.", "пт.", "сб."  ],
	dayNamesMin: [ "Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
	weekHeader: "Тиждень",
	dateFormat: "dd.mm.yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
      yearSuffix: ""
   };
   
datepicker.setDefaults( datepicker.regional.uk );

return datepicker.regional.uk;

} );
