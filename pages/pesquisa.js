import React from 'react'
import Link from 'next/link'

const Pesquisa = () => {
    const save = async () => {
        const form = {
            Nome: 'nnn',
            Email: 'bbb',
            Whatsapp: 'aaa'
        }
        try {
            const response = await fetch('/ipi/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })
            const data = await response.json()
            console.log(data)
        } catch (err) {

        }
    }
    return (
        <div className="pt-6">
            <h1 className="text-center font-bold my-4 text-2x1">Críticas e sugestões</h1>
            <p className="text-center mb-6">
                O restaurante X sempre busca por atender melhor seus clientes.<br />
                Por isso, estamos sempre abertos a ouvir sua opinião.
            </p>
            <div className="w-1/5 mx-auto">
                <label className="font-bold">Seu nome:</label>
                <input type="text" className="p-4 block shadow bg-blue-100 m-2 rounded" />
                <button className="bg-gray-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow" onClick={save}>Salvar</button>
            </div>
        </div>
    )
}

export default Pesquisa