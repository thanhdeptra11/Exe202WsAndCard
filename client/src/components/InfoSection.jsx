import React from 'react'

function InfoSection() {
  const infoItems = [
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8fe2b6718696ecd2523d7a277eaff3d9a4f7dd46bb131f0b47f445691a347c4f?apiKey=ff22ebd9af3b40868bf46ef63076972a&',
      title: 'Today 10:00am - 10:00pm',
      subtitle: 'Working time',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0aaf2ff3-306c-42e0-a403-f4182e1349a9?apiKey=ff22ebd9af3b40868bf46ef63076972a&',
      title: 'Washington, D.C., DC,USA',
      subtitle: 'Our Location',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7b3ab516-bbe4-44e8-9259-66492d0043c6?apiKey=ff22ebd9af3b40868bf46ef63076972a&',
      title: '+0123 456 7891',
      subtitle: 'Phone Number',
    },
  ]

  return (
    <section className="flex flex-col justify-center items-center px-16 py-7 mt-24 max-w-full text-black bg-white shadow-2xl rounded-[50px] w-[1560px] max-md:px-5 max-md:mt-10">
      <div className="flex flex-wrap gap-5 justify-between items-center max-w-full w-[1228px]">
        {infoItems.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center self-stretch my-auto">
              <img loading="lazy" src={item.icon} alt="" className="object-contain aspect-square w-[42px]" />
              <div className="self-stretch mt-3 text-lg font-semibold">{item.title}</div>
              <div className="mt-1.5 text-sm">{item.subtitle}</div>
            </div>
            {index < infoItems.length - 1 && (
              <div className="shrink-0 self-stretch w-px border border-solid bg-zinc-400 border-zinc-400 h-[164px]" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export default InfoSection
