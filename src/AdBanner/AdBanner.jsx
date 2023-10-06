import { useEffect, useState } from "react";

export const AdBanner = ({ adUnitId, size, adDivId, customStyle }) => {
  const removeSlot = (slot) => {
    const { googletag } = window;
    googletag.cmd.push(function () {
      googletag.destroySlots([slot]);
    });
  };
  useEffect(() => {
    let slot;
    const googletag = window.googletag;
    if (!googletag) return;

    googletag.cmd.push(function () {
      slot = googletag.defineSlot(adUnitId, [size.width, size.height], adDivId);
      slot.addService(googletag.pubads());
      googletag.enableServices();
      googletag.display(adDivId);
    });

    return () => {
      removeSlot(slot);
    };
  }, [adUnitId, size, adDivId]);

  return (
    <div
      id={adDivId}
      style={{
        width: `${size.width}px`,
        height: `${size.height}px`,
        margin: "0 auto",
        ...customStyle,
      }}
    />
  );
};
