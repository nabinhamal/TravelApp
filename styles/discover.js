const dstyles = {
    container: {
        flex: 1,
        backgroundColor: 'white',
        position: 'relative',
    },
    d1:{
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 8

    },
text1:{
    fontSize: 40, color: '#0B646B', fontStyle: 'bold'
},
text2:{ 
    fontSize: 36, color: '#527283',
},
box:{
    width: 48,  // Equivalent to w-12
    height: 48, // Equivalent to h-12
    backgroundColor: '#ccc', // Equivalent to bg-gray-400
    borderRadius: 8,  // Equivalent to rounded-md
    alignItems: 'center', // Equivalent to items-center
    justifyContent: 'center', // Equivalent to justify-center
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8,
},
im:{
    width: '100%', // Equivalent to w-full
      height: '100%', // Equivalent to h-full
      borderRadius: 8, // Equivalent to rounded-md
      overflow: 'hidden',
      flex: 1,
          resizeMode: 'cover',
          
},
search:{
    flexDirection: 'row', // Equivalent to flex-row
    alignItems: 'center', // Equivalent to items-center
    backgroundColor: 'white', // Equivalent to bg-white
    marginHorizontal: 12, // Equivalent to mx-4
    borderRadius: 10, // Equivalent to rounded-xl
    paddingVertical: 6, // Equivalent to py-1
    paddingHorizontal: 10, // Equivalent to px-4
    shadowColor: '#000',
    shadowOffset: {
      width: 8,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginTop: 12


},
  menuc:{
    display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: '8px',
  paddingRight: '8px',
  marginTop: '8px'
  },
  
}
    export default dstyles