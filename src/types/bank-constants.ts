export enum BankNameEnum {
    OCB = 'OCB',
    BIDV = 'BIDV',
    MBB = 'MBB',
    ACB = 'ACB',
    VPB = 'VPB',
    PGB = 'PGB',
    VIB = 'VIB',
    STB = 'STB',
    CTG = 'CTG',
    VCB = 'VCB',
    AGRIBANK = 'AGRIBANK',
    SHINHAN = 'SHINHAN',
    COB = 'COB',
    MSB = 'MSB',
}

type BankInfo = {
    code: BankNameEnum
    name: string
    shortName: string
    bin: string
}

export const BanksObject: Partial<Record<BankNameEnum, BankInfo>> = {
    [BankNameEnum.VCB]: {
        code: BankNameEnum.VCB,
        name: 'Ngân hàng TMCP Ngoại Thương Việt Nam',
        bin: '970436',
        shortName: 'Vietcombank'
    },
    [BankNameEnum.CTG]: {
        code: BankNameEnum.CTG,
        name: 'Ngân hàng TMCP Công thương Việt Nam',
        bin: '970415',
        shortName: 'VietinBank',
    },
    [BankNameEnum.BIDV]: {
        code: BankNameEnum.BIDV,
        name: 'Ngân hàng TMCP Đầu tư và Phát triển Việt Nam',
        bin: '970418',
        shortName: 'BIDV',
    },
    [BankNameEnum.AGRIBANK]: {
        code: BankNameEnum.AGRIBANK,
        name: 'Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam',
        bin: '970405',
        shortName: 'Agribank',
    },
    [BankNameEnum.MBB]: {
        code: BankNameEnum.MBB,
        name: 'Ngân hàng TMCP Quân đội',
        bin: '970422',
        shortName: 'MB Bank',
    },
    [BankNameEnum.ACB]: {
        code: BankNameEnum.ACB,
        name: 'Ngân hàng TMCP Á Châu',
        bin: '970416',
        shortName: 'ACB',
    },
    [BankNameEnum.OCB]: {
        code: BankNameEnum.OCB,
        name: 'Ngân hàng TMCP Phương Đông',
        bin: '970448',
        shortName: 'OCB Bank',
    },
    [BankNameEnum.VPB]: {
        code: BankNameEnum.VPB,
        name: 'Ngân hàng TMCP Việt Nam Thịnh Vượng',
        bin: '970432',
        shortName: 'VPBank',
    },
    [BankNameEnum.STB]: {
        code: BankNameEnum.STB,
        name: 'Ngân hàng TMCP Sài Gòn Thương Tín',
        bin: '970403',
        shortName: 'Sacombank',
    },
    [BankNameEnum.VIB]: {
        code: BankNameEnum.VIB,
        name: 'Ngân hàng TMCP Quốc tế Việt Nam',
        bin: '970441',
        shortName: 'VIB',
    },
    [BankNameEnum.PGB]: {
        code: BankNameEnum.PGB,
        name: 'Ngân Hàng TMCP Thịnh vượng và Phát triển',
        bin: '970430',
        shortName: 'PGBank',
    },
    [BankNameEnum.SHINHAN]: {
        code: BankNameEnum.SHINHAN,
        name: 'Ngân hàng TNHH MTV Shinhan Việt Nam',
        bin: '970424',
        shortName: 'Shinhan Bank',
    },
    [BankNameEnum.COB]: {
        code: BankNameEnum.COB,
        name: 'Ngân hàng Hợp tác Xã Việt Nam',
        bin: '970446',
        shortName: 'Co-opBank',
    }
}

export const Banks: BankInfo[] = Object.values(BanksObject) as BankInfo[]

export function getBankCode(bankBin: string): BankNameEnum | undefined {
    return Banks.find(x => x.bin === bankBin)?.code
}

export function getBankShortName(bankBin: string): string | undefined {
    return Banks.find(x => x.bin === bankBin)?.shortName
}

export function getBankBin(bankName: BankNameEnum): string | undefined {
    return Banks.find(x => x.code === bankName)?.bin
}

export enum BankAccountTypeEnum {
    PersonalAccount = 'personal-account',
    BusinessAccount = 'business-account',
    BusinessHouseHoldAccount = 'business-household-account',
}
