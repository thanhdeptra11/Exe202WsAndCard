import React from 'react'
import ServiceCard from './ServiceCard'

function Services() {
  const services = [
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c7ad312b-bb5b-4418-9dab-43742a2a4c9a?apiKey=ff22ebd9af3b40868bf46ef63076972a&',
      title: 'Qualityfull Food',
      description:
        'But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/377e69bb59a315b6f39f0d68043dff3b4e4ea5e5634fb5933e32e5b66694bc57?apiKey=ff22ebd9af3b40868bf46ef63076972a&',
      title: 'Healthy Food',
      description:
        'But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/16b6083d-dd41-4e0a-93cc-b34af8549a3b?apiKey=ff22ebd9af3b40868bf46ef63076972a&',
      title: 'Fast Delivery',
      description:
        'But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.',
    },
  ]

  return (
    <section className="mt-32 max-md:mt-10">
      <h2 className="text-lg font-medium text-orange-400">Services</h2>
      <h3 className="mt-8 ml-12 text-4xl font-bold text-black max-md:max-w-full">
        Chỗ này là ccá gói package update lên Premium account
      </h3>
      <div className="mt-8 w-full max-w-[1561px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
