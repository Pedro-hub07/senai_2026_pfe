import Header from '../../components/header'
import './Relatorio.css'
import GraficoBarra from '../../components/graficoBarra'

export default function Relatorio(){
    const leituras = [
        {horario: "12:00", qualidadeAr: "Boa", iqa: 42, temperatura: "26ºC", umidade: "68%" },
        {horario: "11:00", qualidadeAr: "Moderada", iqa: 55, temperatura: "50ºC", umidade: "50%" },
        {horario: "18:00", qualidadeAr: "Boa", iqa: 60, temperatura: "20ºC", umidade: "75%" },
        {horario: "10:00", qualidadeAr: "Ruim", iqa: 20, temperatura: "39ºC", umidade: "30%" }
    ]
    return(
        <div className="container">
            <Header/>
            <h3>Relatório Estação Meteorológica</h3>
            <p>Monitoramento da temperatura e umidade em tempo real</p>

            <section className="graficos">
               <h6>Gráficos</h6>
                           <div>
                               <GraficoBarra/>
                           </div>
            </section>

            <section className="tabela-leituras">
                <table>
                    <thead>
                        <tr>

                            <th>Horário</th>
                            <th>Qualidade do Ar</th>
                            <th>IQA</th>
                            <th>Temperatura</th>
                            <th>Umidade</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            leituras.map((item, index) =>(
                                <tr key={index}>
                                    <td>{item.horario}</td>
                                    <td>{item.qualidadeAr}</td>
                                    <td>{item.iqa}</td>
                                    <td>{item.temperatura}</td>
                                    <td>{item.umidade}</td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </div>
    )
}