import PropsType from 'prop-types';
import './FormPopup.css'
export const Formpopup=({setIsopen,label})=>{
    return(
     <>
    <div className="container">
    <div className='Form_popup'>
     <div className="Form_header">
      <h2>{label}</h2>
      <div className='B_cerrar' onClick={()=>setIsopen(false)}>
      </div>
     </div>
      <div className='form_cuerpo'>
       Lorem ipsum dolor sit amet consectetur adipiscing elit porttitor litora eu, vulputate habitasse ultricies nisl iaculis metus velit laoreet conubia lacinia, libero volutpat ut risus odio hac nam pulvinar vivamus. Cras ridiculus cubilia nisi aliquet mollis tristique lectus, vivamus placerat platea bibendum nascetur. Torquent montes scelerisque congue consequat integer conubia odio etiam aliquet, ullamcorper metus pulvinar mus aptent rutrum nisl cras tellus, mauris cursus enim felis nam class dui facilisi.
Lacus non porta fusce nostra taciti nulla potenti dictumst iaculis, egestas nullam penatibus proin mi tempus placerat cum aliquet eros, rutrum congue pretium viverra ac nunc metus odio. Ultrices metus condimentum ligula tempus himenaeos id erat curabitur, fringilla tincidunt pretium sem sollicitudin ornare conubia, fusce sed consequat sapien a platea arcu. Cubilia purus scelerisque ullamcorper curabitur conubia semper natoque a, aenean nibh tortor commodo netus potenti ut vehicula, sagittis praesent dictum turpis lacinia ligula ultricies
        <button className="B_aceptar" onClick={()=>setIsopen(false)}>Guardar Cambios</button>
     </div>
    </div>
    </div>
     </>
    )
};

Formpopup.propTypes={
  setIsopen:PropsType.bool,
  label:PropsType.string
};

Formpopup.defaultProps={
  label:'Formulario popup'
};