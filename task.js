let dropButton = document.querySelector( '.dropdown__value' );
let dropList = document.querySelector( '.dropdown__list' );
let dropItems = document.querySelectorAll( '.dropdown__item' );

function switchClass( event ) {
  event.preventDefault();
  dropList.className.includes( 'dropdown__list_active' ) ? dropList.className = dropList.className.replace( 'dropdown__list_active' , '' ) : dropList.className += ' dropdown__list_active';
}

function menuSelect( event ) {
  event.preventDefault();
  dropButton.textContent = event.currentTarget.textContent;
  event.currentTarget.closest( '.dropdown__list' ).className = event.currentTarget.closest( '.dropdown__list' ).className.replace( 'dropdown__list_active' , '' );
}

dropButton.addEventListener( 'click', switchClass );

dropItems.forEach( (item) => {
  item.addEventListener( 'click', menuSelect);
});
