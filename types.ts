export type WebDFUSettings = {
  name?: string;
  configuration: USBConfiguration;
  interface: USBInterface;
  alternate: USBAlternateInterface;
};

export type WebDFUDeviceDescriptor = {
  bLength: number;
  bDescriptorType: number;
  bcdUSB: number;
  bDeviceClass: number;
  bDeviceSubClass: number;
  bDeviceProtocol: number;
  bMaxPacketSize: number;
  idVendor: number;
  idProduct: number;
  bcdDevice: number;
  iManufacturer: number;
  iProduct: number;
  iSerialNumber: number;
  bNumConfigurations: number;
};

export type WebDFUFunctionalDescriptor = {
  bLength: number;
  bDescriptorType: number;
  bmAttributes: number;
  wDetachTimeOut: number;
  wTransferSize: number;
  bcdDFUVersion: number;
};

export type WebDFUInterfaceDescriptor = {
  bLength: number;
  bDescriptorType: number;
  bInterfaceNumber: number;
  bAlternateSetting: number;
  bNumEndpoints: number;
  bInterfaceClass: number;
  bInterfaceSubClass: number;
  bInterfaceProtocol: number;
  iInterface: number;
  descriptors: (WebDFUFunctionalDescriptor | WebDFUInterfaceSubDescriptor)[];
};

export type WebDFUInterfaceSubDescriptor = {
  descData: DataView;
  bLength: number;
  bDescriptorType: number;
  bmAttributes: number;
  wDetachTimeOut: number;
  wTransferSize: number;
  bcdDFUVersion: number;
};

export type WebDFUEvent = {
  init: () => void;
  connect: () => void;
  disconnect: (error?: Error) => void;
};

export type WebDFUOptions = {
  forceInterfacesName?: boolean;
};

export type WebDFUProperties = {
  WillDetach: boolean;
  ManifestationTolerant: boolean;
  CanUpload: boolean;
  CanDownload: boolean;
  TransferSize: number;
  DetachTimeOut: number;
  DFUVersion: number;
};

export type WebDFULog = Partial<
  Record<"info" | "warning", (msg: string) => void> & {
    progress: (done: number, total?: number) => void;
  }
>;

export const WebDFUType: Record<"DFU" | "SDFUse", number> = {
  DFU: 1,
  SDFUse: 2,
};
