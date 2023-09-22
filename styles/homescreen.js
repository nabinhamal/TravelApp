const styles = {
    container: {
        backgroundColor: '#FFFFFF', flex: 1, position: 'relative'
  
    },
    //first section
f1:{
  flexDirection: 'row', paddingHorizontal: 6, marginTop: 8, alignItems: 'center'
},
f2:{
  width: 64, height: 64, backgroundColor: '#000000', borderRadius: 32, alignItems: 'center', justifyContent: 'center'
},
text1:{
  color: '#00BCC9', fontSize: 24, fontWeight: 'bold'
},
text2:{
  color: '#2A2B4B', fontSize: 24, fontWeight: 'bold'
},
//second section
s1:{
  paddingHorizontal: 6, marginTop: 8, marginBottom: 24
},
text3: {
  color: '#3C6072', fontSize: 42
  },
  text4: {
    color: '#00BCC9', fontSize: 38, fontWeight: 'bold'
  },
  //circle section
  ctext: {
    color: '#3C6072', fontSize: 16

  },
  c1: {
    width: 400, height: 400, backgroundColor: '#00BCC9', borderRadius: 200, position: 'absolute', bottom: 148, right: -100
  },
  c2:{
    width: 400, height: 400, backgroundColor: '#E99265', borderRadius: 200, position: 'absolute', bottom: -98, left: -136 
  },
  //image section
  im:{
    flex:1,alignItems:'center',position: 'relative',alignItems: 'center', justifyContent: 'center'
  },
  im2:{
    width: '100%', height: '100%', objectFit: 'cover', marginTop: '20%',
  },
  im3:{
    position: 'absolute',
    bottom: 20,
    width: 96,
    height: 96,
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 4,
    borderColor: '#00BCC9',
    borderRadius: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
        
},
//go text
ocir:{
  width: 85,
  height: 85,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 50,
  backgroundColor: '#00BCC9'
},
cirtext:{
  color: '#ccc', fontSize: 36, fontWeight: 'semibold' 
}
}
  
  export default styles;