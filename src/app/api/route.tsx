  export async function GET() { 
    const mockData = [
        { col1: 'Data1', col2: 'Data2', col3: 'Data3', col4: 'Data4' },
        { col1: 'Data5', col2: 'Data6', col3: 'Data7', col4: 'Data8' },
        { col1: 'Data9', col2: 'Data10', col3: 'Data11', col4: 'Data12' },
        { col1: 'Data13', col2: 'Data14', col3: 'Data15', col4: 'Data16' },
      ];
   
    return Response.json({ mockData })
  }